<?php

namespace App\Http\Controllers;

use App\category;
use App\Components\Recusive;
use App\Traits\StorageImageTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Product;
use Exception;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\ProductAddRequest;
use App\Traits\DeleteModelTrait;

class AdminProductController extends Controller
{
    use StorageImageTrait;
    use DeleteModelTrait;
    private $category;
    private $product;
    public function __construct(category $category, Product $product)
    {
        $this->category = $category;
        $this->product = $product;
    }

    public function index() {
        $products = $this->product->latest()->paginate(5);
        return view('admin.product.index', compact('products'));
    }

    public function create() {
        $htmlOption = $this->getCategory($parentId = '');
        return view('admin.product.add', compact('htmlOption'));
    }

    public function getCategory($parentId) {
        $data = $this->category->all(); 
        $recusive = new Recusive($data);
        $htmlOption = $recusive->categoryRecusive($parentId);
        return $htmlOption;
    }

    public function store(ProductAddRequest $request) {
        $dataProductCreate = [
            'name' => $request->name,
            'price' => $request->price,
            'content' => $request->contents,
            'user_id' => auth()->id(),
            'category_id' => $request->category_id
        ];
        $dataUploadFeatureImage = $this->storageTraitUpload($request, 'feature_img_path', 'product');
        if(!empty($dataUploadFeatureImage))
        {
            $dataProductCreate['feature_image_name'] = $dataUploadFeatureImage['file_name'];
            $dataProductCreate['feature_img_path'] = $dataUploadFeatureImage['file_path'];
        }

        $product = $this->product->create($dataProductCreate);
        return redirect()->route('products.index');
    }

    public function edit($id) {
        $product = $this->product->find($id);
        $htmlOption = $this->getCategory($product->category_id);
        return view('admin.product.edit', compact('htmlOption', 'product'));
    }

    public function update($id, Request $request) {
        $dataProductUpdate = [
            'name' => $request->name,
            'price' => $request->price,
            'content' => $request->contents,
            'user_id' => auth()->id(),
            'category_id' => $request->category_id
        ];
        $dataUploadFeatureImage = $this->storageTraitUpload($request, 'feature_img_path', 'product');
        if(!empty($dataUploadFeatureImage))
        {
            $dataProductCreate['feature_image_name'] = $dataUploadFeatureImage['file_name'];
            $dataProductCreate['feature_img_path'] = $dataUploadFeatureImage['file_path'];
        }

        $product = $this->product->find($id)->update($dataProductUpdate);
        return redirect()->route('products.index');        
    }

    public function delete($id) {
        return $this->deleteModelTrait($id, $this->product);
    }

    public function addToCart($id, $quantity) {
        // session()->flush('cart');

        $cart = session()->get('cart');
        $product = $this->product->find($id);
        if( isset($cart[$id]) ) {
            $cart[$id]['quantity'] = $cart[$id]['quantity'] + $quantity; 
        }
        else
        {
            $cart[$id] = [
                'name' => $product->name,
                'price' => $product->price,
                'quantity' => $quantity,
                'image_path' => $product->feature_img_path
            ];
        }

        session()->put('cart', $cart);

        echo "<pre>";
        print_r(session()->get('cart'));

        return response()->json([
            'code' => 200,
            'message' => 'success'
        ], 200);
    }

    public function listCart() {
        if(session()->has('cart')) {
            $cart = session()->get('cart');
            // echo "<pre>";
            return response()->json($cart);
        }
    }

    public function updateCart(Request $request) {
        if(session()->has('cart')) {
            $datas = $request->all();
            $cart = session()->get('cart');
            foreach($datas as $data)
            {
                $arr = explode('"', $data);
                $id = $arr[3];
                $quan = $arr[7];
                $cart[$id]['quantity'] = $quan;
            }
            session()->put('cart', $cart);
    
            // echo "<pre>";
            // print_r(session()->get('cart'));
    
            return response()->json([
                'code' => 200,
                'message' => 'success'
            ], 200);
        }
    }

    public function deleteCart(Request $request) {
        if(session()->has('cart')) {
            $id = $request->id;
            $cart = session()->get('cart');
            unset($cart[$id]);
            session()->put('cart', $cart);
    
            return response()->json([
                'code' => 200,
                'message' => 'success'
            ], 200);
        }
    }

    public function getTotalMoney() {
        
        if(session()->has('cart'))
        {
            $carts = session()->get('cart');
            $totalMoney = 0;
            foreach($carts as $cart)
            {
                $totalMoney += $cart['quantity'] * $cart['price'];
            }
            return $totalMoney;
        }
    }

    public function listLatestProduct() {
        $data = $this->product->latest()->take(6)->get();
        return $data;
    }
}
