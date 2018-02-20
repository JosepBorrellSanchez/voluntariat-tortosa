<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class ApiUserController extends Controller
{

  public function show(User $user)
  {
    return $user;
  }
}
