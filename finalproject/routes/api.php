<?php

use Illuminate\Http\Request;
use App\Http\Controllers\StorePageController;
use App\Http\Controllers\ProductPageController;
use App\Http\Controllers\AdminProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('frontend')->group(function(){
    Route::prefix('store')->group(function(){
        Route::get('/listproduct/{categoryid}', [StorePageController::class, 'listProduct']);
        Route::get('/listcategory', [StorePageController::class, 'listCategory']);
        Route::get('/sortproduct', [StorePageController::class, 'sortProduct']);
        Route::get('/filterproduct/{categoryid}/{min}/{max}', [StorePageController::class, 'filterProduct']);
        Route::get('/sortandfilterproduct', [StorePageController::class, 'sortandfilterProduct']);
    });

    Route::prefix('homepage')->group(function() {
        Route::get('/listlatestproduct', [AdminProductController::class, 'listLatestProduct']);
    });
});



