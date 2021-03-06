<?php

namespace App\Listeners;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class AssignUserRoles
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Assigna el rol a l'usuari
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
      $user = $event->user;
      $user->syncRoles($user->role);
    }
}
