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
  Route::get('activitats/user/{user}', 'ApiUserActivitiesController@index');
  Route::delete('activitats/{user}/activitat/{activitat}', 'ApiUserActivitiesController@destroy');

  Route::get('activitats/entitat/{user}', 'ApiEntityActivitiesController@index');

  Route::group(['middleware' => 'auth:api'], function () {

    Route::post('activitats', 'ApiActivitatsController@store');
    Route::get('activitats/create', 'ApiActivitatsController@create');
    Route::get('activitats/{activitat}', 'ApiActivitatsController@show');
    Route::put('activitats/{activitat}', 'ApiActivitatsController@update');
    Route::delete('activitats/{activitat}', 'ApiActivitatsController@destroy');
    Route::delete('activitats/{activitat}/voluntaris/{user}', 'ApiActivitatsController@detachVolunteer');
    Route::delete('activitats/{activitat}/entitats/{user}', 'ApiActivitatsController@detachEntity');

    Route::get('activitats/{activitat}/users', 'ApiActivityUsersController@index');
    Route::get('activitats/{activitat}/entitats', 'ApiActivityEntitiesController@index');
//      Route::resource('activitats', 'ApiActivitatsController');

    Route::get('/entitats', 'ApiEntitiesController@index');
    Route::get('/entitats/{user}', 'ApiEntitiesController@show');
    Route::delete('/entitats/{user}', 'ApiEntitiesController@destroy');

    Route::get('/voluntaris', 'ApiVolunteersController@index');
    Route::get('/voluntaris/{user}', 'ApiVolunteersController@show');
    Route::delete('/voluntaris/{user}', 'ApiVolunteersController@destroy');

    Route::get('/info/{user}', 'ApiInfoController@show');

    Route::get('/admins', 'ApiAdminsController@index');
    Route::get('/admins/{user}', 'ApiAdminsController@show');
    Route::delete('/admins/{user}', 'ApiAdminsController@destroy');

    Route::get('user/active', function () {
      $user = Auth::guard('api')->user();
      return $user;
    });

    Route::get('user/roles', function () {
      return json_encode(Auth::user()->getRoleNames());
    });

  });
});
