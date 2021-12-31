<?php

namespace App\Http\Controllers;
use App\Category;
use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StorePageController extends Controller
{
    private $product, $category;
    public function __construct(Product $product, Category $category)
    {
        $this->product = $product;
        $this->category = $category;
    }

    public function listCategory() {
        return $this->category->get();
    }

    public function listProduct($categoryid) {
        return $this->product->where('category_id', $categoryid)->paginate(12);
    }

    public function sortProduct(Request $request) {
        $categoryid = $request->category_id;
        if($request->name === 'increase')
        {
            // $data = $this->product->get()->where('category_id', $categoryid)->orderBy('price');
            $data = DB::table('products')->where('category_id', $categoryid)->orderBy('price')->paginate(9);
        }
        else
        {
            $data = DB::table('products')->where('category_id', $categoryid)->orderBy('price', 'desc')->paginate(9);
        }
        return response()->json($data);
    }

    public function filterProduct(Request $request) {
        $min_price = $request->min;
        $max_price = $request->max;
        $categoryid = $request->categoryid;
        $data = $this->product->where('category_id', $categoryid)->whereBetween('price', [$min_price, $max_price])->paginate(9);
        return response()->json($data);
    }

    public function sortandfilterProduct(Request $request) {
        $min_price = $request->min;
        $max_price = $request->max;
        $categoryid = $request->category_id;
        if($request->name === 'increase')
        {
            // $data = $this->product->get()->where('category_id', $categoryid)->orderBy('price');
            $data = $this->product->where('category_id', $categoryid)->whereBetween('price', [$min_price, $max_price])->orderBy('price')->paginate(9);
        }
        else
        {
            $data = $this->product->where('category_id', $categoryid)->whereBetween('price', [$min_price, $max_price])->orderBy('price', 'desc')->paginate(9);
        }
        return response()->json($data);
    }

    public function searchProduct(Request $request) {
        $search = $request->nameSearch;
        $data = $this->product->where('name', 'like', '%'.$search.'%')->paginate(9);
        return response()->json($data);
    }
}
