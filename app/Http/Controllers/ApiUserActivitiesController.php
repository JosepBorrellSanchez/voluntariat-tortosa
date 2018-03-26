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
    $activitats = $user->registeredActivities;
    return $activitats;
  }

  public function destroy(Activitat $activitat) {
    $user = Auth::guard('api')->user();
    $user->registeredActivities()->detach($activitat);
  }
}
