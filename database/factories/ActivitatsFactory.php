<?php

use Faker\Generator as Faker;

$factory->define(App\Activitats::class, function (Faker $faker) {
    return [
        'nom' => $faker->name,
        'descripcio' => $faker->text
    ];
});
