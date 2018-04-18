<?php

namespace App\Providers;

use App\Activitat;
use App\Observers\ActivityObserver;
use App\Observers\UserObserver;
use App\User;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
      // Arranca els observers
      User::observe(UserObserver::class);
      Activitat::observe(ActivityObserver::class);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
