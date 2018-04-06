<?php
/**
 * Created by PhpStorm.
 * User: grey
 * Date: 21/03/18
 * Time: 10:30
 */

namespace App\Observers;


use App\Events\ActivityCreated;
use App\Activitat;

class ActivityObserver
{
  public function created(Activitat $activitat) {
    event(new ActivityCreated($activitat));
  }
}