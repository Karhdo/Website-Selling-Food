<?php

namespace App\Http\Controllers;

use App\Category;
use App\Order;
use App\Product;
use App\Transaction;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function __construct(Category $category, Product $product)
    {
        $this->category = $category;
        $this->product = $product;
    }

    public function listLatestProduct() {
        $data = $this->product->latest()->take(6)->get();
        return $data;
    }

    public function getProduct($id) {
        $data = $this->product->where('id', $id)->get();
        return response()->json($data);
    }

    public function addToCart($id, $quantity, $userId) {
        // session()->flush('cart');

        $cart = session()->get('cart');
        $product = $this->product->find($id);
        if(isset($cart[$userId]))
        {
            if( isset($cart[$userId][$id]) ) {
                $cart[$userId][$id]['quantity'] = $cart[$userId][$id]['quantity'] + $quantity; 
            }
            else {
                $cart[$userId][$id] = [
                    'name' => $product->name,
                    'price' => $product->price,
                    'quantity' => $quantity,
                    'image_path' => $product->feature_img_path
                ];
            }
        }
        else
        {
            $cart[$userId][$id] = [
                    'name' => $product->name,
                    'price' => $product->price,
                    'quantity' => $quantity,
                    'image_path' => $product->feature_img_path
            ];
        }
        // $product = $this->product->find($id);
        // if( isset($cart[$id]) ) {
        //     $cart[$id]['quantity'] = $cart[$id]['quantity'] + $quantity; 
        // }
        // else
        // {
        //     $cart[$id] = [
        //         'name' => $product->name,
        //         'price' => $product->price,
        //         'quantity' => $quantity,
        //         'image_path' => $product->feature_img_path
        //     ];
        // }

        session()->put('cart', $cart);

        // echo "<pre>";
        // print_r(session()->get('cart'));

        return response()->json([
            'code' => 200,
            'message' => 'success'
        ], 200);
    }

    public function listCart(Request $request) {
        $userId = $request->header("userId");
        if(session()->has('cart')) {
            $cart = session()->get('cart');
            // echo "<pre>";
            foreach($cart as $key => $value)
            {
                if($key == $userId)
                {
                    return response()->json($cart[$key]);
                }
            }
        }
    }

    public function updateCart(Request $request) {
        $userId = $request->header("userId");
        if(session()->has('cart')) {
            $datas = $request->all();
            $cart = session()->get('cart');
            foreach($datas as $data)
            {
                $arr = explode('"', $data);
                $id = $arr[3];
                $quan = $arr[7];
                if($quan == 0)
                {
                    unset($cart[$userId][$id]); // Xóa product
                }
                else
                {
                    $cart[$userId][$id]['quantity'] = $quan;
                }
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
        $userId = $request->header("userId");
        if(session()->has('cart')) {
            $id = $request->id;
            $cart = session()->get('cart');
            unset($cart[$userId][$id]);
            session()->put('cart', $cart);
    
            return response()->json([
                'code' => 200,
                'message' => 'success'
            ], 200);
        }
    }

    public function getTotalMoney(Request $request) {
        $userId = $request->header("userId");
        if(session()->has('cart'))
        {
            $carts = session()->get('cart');
            $totalMoney = 0;
            foreach($carts as $key => $value) {
                if($key == $userId) {
                    foreach($value as $product) {
                        $totalMoney += $product['quantity'] * $product['price'];
                    }
                }
            }
            return $totalMoney;
        }
        else
            return 0;
    }

    public function orderCart(Request $request) {
        $userId = $request->header("userId");
        
        if(session()->has('cart'))
        {
            $transactionCreate = Transaction::create([
                'name_customer' => $request->name,
                'address' => $request->address,
                'country' => $request->country,
                'phone_number' => $request->phoneNumber,
                'email' => $request->email,
                'note' => $request->note,
                'total_money' => $request->total_money,
                'status' => '1',
                'user_id' => $userId
            ]);

            $carts = session()->get('cart');
            foreach($carts as $key => $value)
            {
                if($key == $userId)
                {
                    foreach($value as $key => $product)
                    {
                        $orderCreate = Order::create([
                            'product_id' => $key,
                            'product_name' => $product['name'],
                            'product_price' => $product['price'],
                            'quantity' => $product['quantity'],
                            'transaction_id' => $transactionCreate['id']
                        ]);
                    }
                }
            }

            return response()->json([
                'code' => '200',
                'message' => 'success'
            ], 200);
        }
        else {
            return response()->json([
                'code' => '404',
                'message' => 'error'
            ]);
        }
    }
}
