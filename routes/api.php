<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

Route::group(['prefix' => 'v1'], function () {
  Route::post('/proxy/oauth/token', 'PasswordGrantProxyController@issueToken');
});

Route::group(['middleware' => 'api', 'middleware' => ['throttle', 'bindings']], function () {

  Route::get('activitats', 'ApiActivitatsController@index');
  Route::get('activitats/user/{user}', 'ApiActivitatsController@userIndex');

    Route::group(['middleware' => 'auth:api'], function () {

      Route::post('activitats', 'ApiActivitatsController@store');
      Route::get('activitats/create', 'ApiActivitatsController@create');
      Route::get('activitats/{activitat}', 'ApiActivitatsController@show');
      Route::put('activitats/{activitat}', 'ApiActivitatsController@update');
      Route::delete('actvitiats/{activitat}', 'ApiActivitatsController@destroy');
//      Route::resource('activitats', 'ApiActivitatsController');

      Route::get('user/active', function () {
        $user = Auth::guard('api')->user();
        return $user;
      });

    });
});
