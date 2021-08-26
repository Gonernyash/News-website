<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Models\News;
use App\Http\Controllers\NewsController;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::get('news', function() {

//     $news = News::all();
//     return $news;
// });

Route::get('news', function(Request $request) {
    NewsController::get($request); 
    return NewsController::groupBy('date');
});
