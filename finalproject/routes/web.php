<?php

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

Route::get('/home', function() {
    return view('home');
});

Route::get('/admin', 'AdminController@loginAdmin');

Route::prefix('admin')->group(function () {
    
    Route::get('/', [
        'as' => 'admin.login',
        'uses' => 'AdminController@loginAdmin'
    ]);
    Route::post('/', [
        'as' => 'admin.post-login',
        'uses' => 'AdminController@postLoginAdmin'
    ]);

    Route::get('/logout', [
        'as' => 'admin.logout',
        'uses' => 'AdminController@logout'
    ]);

    //categories
    Route::prefix('categories')->group(function () {
        Route::get('/', [
            'as' => 'categories.index',
            'uses' => 'CategoryController@index'
        ]);
    
        Route::get('/create', [
            'as' => 'categories.create',
            'uses' => 'CategoryController@create'
        ]);
    
        Route::post('/store', [
            'as' => 'categories.store',
            'uses' => 'CategoryController@store'
        ]);
    
        Route::get('/edit/{id}', [
            'as' => 'categories.edit',
            'uses' => 'CategoryController@edit'
        ]);
    
        Route::post('/update/{id}', [
            'as' => 'categories.update',
            'uses' => 'CategoryController@update'
        ]);
        
        Route::get('/delete/{id}', [
            'as' => 'categories.delete',
            'uses' => 'CategoryController@delete'
        ]);
    });

    //menus
    Route::prefix('menus')->group(function () {
        Route::get('/', [
            'as' => 'menus.index',
            'uses' => 'MenuController@index'
        ]);
    
        Route::get('/create', [
            'as' => 'menus.create',
            'uses' => 'MenuController@create'
        ]);
    
        Route::post('/store', [
            'as' => 'menus.store',
            'uses' => 'MenuController@store'
        ]);
    
        Route::get('/edit/{id}', [
            'as' => 'menus.edit',
            'uses' => 'MenuController@edit'
        ]);
    
        Route::post('/update/{id}', [
            'as' => 'menus.update',
            'uses' => 'MenuController@update'
        ]);
    
        Route::get('/delete/{id}', [
            'as' => 'menus.delete',
            'uses' => 'MenuController@delete'
        ]);
    });

    //products
    Route::prefix('products')->group(function () {
        Route::get('/', [
            'as' => 'products.index',
            'uses' => 'AdminProductController@index'
        ]);

        Route::get('/create', [
            'as' => 'products.create',
            'uses' => 'AdminProductController@create'
        ]);

        Route::post('/store', [
            'as' => 'products.store',
            'uses' => 'AdminProductController@store'
        ]);

        Route::get('/edit/{id}', [
            'as' => 'products.edit',
            'uses' => 'AdminProductController@edit'
        ]);

        Route::post('/update/{id}', [
            'as' => 'products.update',
            'uses' => 'AdminProductController@update'
        ]);

        Route::get('/delete/{id}', [
            'as' => 'products.delete',
            'uses' => 'AdminProductController@delete'
        ]);        
    });

    // Setting
    Route::prefix('settings')->group(function () {
        Route::get('/', [
            'as' => 'settings.index',
            'uses' => 'AdminSettingController@index'
        ]);      

        Route::get('/create', [
            'as' => 'settings.create',
            'uses' => 'AdminSettingController@create'
        ]);  

        Route::post('/store', [
            'as' => 'settings.store',
            'uses' => 'AdminSettingController@store'
        ]);       
 
        Route::get('/edit/{id}', [
            'as' => 'settings.edit',
            'uses' => 'AdminSettingController@edit'
        ]);            
        
        Route::post('/update/{id}', [
            'as' => 'settings.update',
            'uses' => 'AdminSettingController@update'
        ]);  

        Route::get('/delete/{id}', [
            'as' => 'settings.delete',
            'uses' => 'AdminSettingController@delete'
        ]); 
    });   
});

Route::prefix('Product')->group(function(){
    Route::prefix('frontend/product')->group(function() {
        Route::get('/{id}', 'ProductPageController@getProduct');
        Route::get('/add-to-cart/{id}/{quantity}', 'AdminProductController@addToCart');
    });
});

Route::prefix('ProductCart')->group(function(){
    Route::get('/cart', 'AdminProductController@listCart');
    Route::get('/update-cart', 'AdminProductController@updateCart');
    Route::get('/delete-cart', 'AdminProductController@deleteCart');
});

Route::prefix('Store')->group(function(){
    Route::get('/', 'AdminProductController@getTotalMoney');
});