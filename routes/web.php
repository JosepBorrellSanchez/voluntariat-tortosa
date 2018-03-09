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

//Route::get('/', function () {
//  return view('welcome');
//})->name('/');

Route::view('/', 'voluntariat.index');

Route::group(['middleware' => 'web'], function () {
  Route::group(['middleware' => 'auth:web'], function () {
    Route::resource('/activitats', 'ActivitatsController');
//    Route::get('user/active', function () {
//      $user = Auth::user();
//      return $user;
//    });

    Route::post('logout', 'Auth\LoginController@logout')->name('logout');
  });

//  Route::post('/login', 'Auth\LoginController@login');
//
//  Route::post('/login/refresh', 'Auth\LoginController@refresh');
});

//Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
