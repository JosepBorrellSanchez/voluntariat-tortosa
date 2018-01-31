<?php

use Illuminate\Database\Seeder;
use App\Activitats;

class ActivitatsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Activitats::class, 10)->create();
    }
}
