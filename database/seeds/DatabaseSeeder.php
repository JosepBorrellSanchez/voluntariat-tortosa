<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        initialize_permissions();

        create_user();

        first_user_as_manager();

        $this->call(UsersSeeder::class);

        $this->call(InfoSeeder::class);

        $this->call(ActivitatsSeeder::class);

        $activitat = \App\Activitat::first();
        $user = \App\User::find(3);

        $user->registeredActivities()->attach($activitat);

        Artisan::call('passport:install');
    }
}
