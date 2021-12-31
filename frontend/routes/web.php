<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function() {
    return view('frontend.homepage');
});

Route::prefix('Product')->group(function(){
    Route::prefix('frontend/product')->group(function() {
        Route::get('/{id}', 'ProductController@getProduct');
        Route::get('/add-to-cart/{id}/{quantity}/{userId}', 'ProductController@addToCart');
    });
});

Route::prefix('ProductCart')->group(function(){
    Route::get('/cart', 'ProductController@listCart');
    Route::get('/update-cart', 'ProductController@updateCart');
    Route::get('/delete-cart', 'ProductController@deleteCart');
    Route::post('/order-cart', 'ProductController@orderCart');
});

Route::prefix('Store')->group(function(){
    Route::get('/', 'ProductController@getTotalMoney');
});