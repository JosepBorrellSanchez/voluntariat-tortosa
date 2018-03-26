<?php

use App\User;
use Illuminate\Database\Seeder;
use App\Activitat;

class ActivitatsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $activitatsUser = factory(Activitat::class, 3)->create(['user_id' => 2]);
        factory(Activitat::class, 7)->create(['user_id' => 2]);

        foreach ($activitatsUser as $activitat) {
          User::find(3)->registeredActivities()->attach($activitat);
        }

    }
}
