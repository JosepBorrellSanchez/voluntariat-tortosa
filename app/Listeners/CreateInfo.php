<?php

namespace App\Listeners;

use App\EntityInfo;
use App\VolunteerInfo;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class CreateInfo
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
     * Crea una relació Usuari->info depenent del seu rol
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
      $user = $event->user;
      if($user->hasRole('entity')) {
        EntityInfo::create([
          'user_id' => $user->id
        ]);
      } else if ($user->hasRole('volunteer')) {
        VolunteerInfo::create([
          'user_id' => $user->id
        ]);
      } else {
        //  TODO ERROR
      }
    }
}
