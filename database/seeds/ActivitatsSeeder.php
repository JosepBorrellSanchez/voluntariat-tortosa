<?php

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
        factory(Activitat::class, 10)->create();
    }
}
