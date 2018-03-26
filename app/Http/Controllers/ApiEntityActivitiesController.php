<?php

namespace App\Http\Controllers;

use App\Http\Requests\ListActivitats;
use App\User;
use Illuminate\Http\Request;

class ApiEntityActivitiesController extends Controller
{
  public function index(ListActivitats $request, User $user) {
    $activitats = $user->activitats;
    return $activitats;
  }
}
