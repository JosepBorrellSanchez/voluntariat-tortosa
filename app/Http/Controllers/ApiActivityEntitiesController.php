<?php

namespace App\Http\Controllers;

use App\Activitat;
use Illuminate\Http\Request;

class ApiActivityEntitiesController extends Controller
{
  public function index(Activitat $activitat) {
    $entities = $activitat->entitat;
    return $entities;
  }
}
