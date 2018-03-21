<?php

namespace App\Http\Controllers;

use App\Http\Requests\ListEntities;
use App\Http\Requests\ShowEntity;
use App\User;
use Illuminate\Http\Request;

class ApiEntitiesController extends Controller
{
  public function index(ListEntities $request) {
    $entitats = User::role('entity')->get();
    return $entitats;
  }

  public function show(ShowEntity $request, User $user) {
    if($user->HasRole('entity')) {
      return $user->toArray();
    } else {
      abort(404);
    }
  }

  public function destroy(User $user) {
    $user->delete();
  }
}
