<?php
/**
 * Created by PhpStorm.
 * User: grey
 * Date: 21/03/18
 * Time: 10:30
 */

namespace App\Observers;


use App\Events\UserCreated;
use App\User;

class UserObserver
{
  public function created(User $user) {
    event(new UserCreated($user));
  }
}