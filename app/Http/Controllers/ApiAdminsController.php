<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteAdmin;
use App\Http\Requests\ListAdmins;
use App\Http\Requests\ShowAdmin;
use App\User;
use Illuminate\Http\Request;

class ApiAdminsController extends Controller
{
  public function index(ListAdmins $request) {
    $volunteers = User::role('admin')->get();
    return $volunteers;
  }

  public function show(ShowAdmin $request, User $user) {
    return $user;
  }

  public function destroy(DeleteAdmin $request, User $user) {
    $user->delete();
  }
}
