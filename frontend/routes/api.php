<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StorePageController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\HeaderController;
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
        Route::get('/searchproduct/{nameSearch}', [StorePageController::class, 'searchProduct']);
    });

    Route::prefix('homepage')->group(function() {
        Route::get('/listlatestproduct', [ProductController::class, 'listLatestProduct']);
    });

    Route::post('register', [RegisterController::class, 'register']);
    Route::post('login', [LoginController::class, 'login']);
    Route::get('getInforUser', [HeaderController::class, 'getInforUser']);
    Route::get('logout', [LoginController::class, 'logout']);
});

