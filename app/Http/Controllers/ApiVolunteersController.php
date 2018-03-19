<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteVolunteer;
use App\Http\Requests\ListVolunteers;
use App\Http\Requests\ShowVolunteer;
use App\User;
use Illuminate\Http\Request;

class ApiVolunteersController extends Controller
{
  public function index(ListVolunteers $request) {
    $volunteers = User::role('voluntari')->get();
    return $volunteers;
  }

  public function show(ShowVolunteer $request, User $user) {
    return $user;
  }

  public function destroy(DeleteVolunteer $request, User $user) {
    $user->delete();
  }
}
