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

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Auth::routes();

//Route::get('/', 'HomeController@index')->name('home');

Route::get('/', function () {
  return view('welcome');
})->name('/');

Route::group(['middleware' => 'web'], function () {
  Route::group(['middleware' => 'auth:web'], function () {
    Route::resource('/activitats', 'ActivitatsController');
//    Route::post('/logout', 'Auth\LoginController@logout')->name('logout');
    Route::view('/home', 'voluntariat.index');

    Route::get('/homes', 'HomeController@index')->name('home');

    Route::get('user/active', function () {
      $user = Auth::user();
      return $user;
    });

    Route::post('logout', 'Auth\LoginController@logout')->name('logout');
  });
});

Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
