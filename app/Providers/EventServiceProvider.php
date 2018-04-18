<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
//        'App\Events\Event' => [
//            'App\Listeners\EventListener',
//        ],
        // Cada vegada que es dispara un event UserCreated s'executen el següent listeners
        'App\Events\UserCreated' => [
          'App\Listeners\AssignUserRoles',
//          'App\Listeners\SendWelcomeMail',
          'App\Listeners\CreateInfo'
        ],
        // Cada vegada que es dispara un event ActivityCreated s'executa el listener AssignActivityProperty
        'App\Events\ActivityCreated' => [
          'App\Listeners\AssignActivityProperty'
        ]
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
