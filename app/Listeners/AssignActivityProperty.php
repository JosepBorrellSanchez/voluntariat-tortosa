<?php

namespace App\Listeners;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class AssignActivityProperty
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
     * Assigna la propietat de la nova activitat a l'usuari que l'ha creat
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
      $activity = $event->activity;
      $activity->entitat()->attach($activity->user_id);
    }
}
