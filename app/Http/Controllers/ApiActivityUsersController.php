<?php

namespace App\Http\Controllers;

use App\Activitat;
use Illuminate\Http\Request;

class ApiActivityUsersController extends Controller
{
  public function index(Activitat $activity) {
    $users = $activity->volunteers;
    return $users;
  }
}
