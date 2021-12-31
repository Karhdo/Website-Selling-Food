<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductPageController extends Controller
{
    private $product;
    public function __construct(Product $product)
    {   
        $this->product = $product;
    }
    public function getProduct($id) {
        $data = $this->product->where('id', $id)->get();
        return response()->json($data);
    }
}
