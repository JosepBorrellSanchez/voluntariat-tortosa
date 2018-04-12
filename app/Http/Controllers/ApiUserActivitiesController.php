<?php

namespace App\Http\Controllers;

use App\Activitat;
use App\Http\Requests\ListActivitats;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ApiUserActivitiesController extends Controller
{
  public function index(ListActivitats $request, User $user) {
    $rolename = $user->role;
    if($rolename = 'entity') {
      $activitats = $user->activitats;
    } else {
      $activitats = $user->registeredActivities;
    }
    return $activitats;
  }

  public function destroy(Request $request, User $user, Activitat $activitat) {
    $user->registeredActivities()->detach($activitat->id);
  }
}
