<?php

use Faker\Generator as Faker;

$factory->define(App\Entitat::class, function (Faker $faker) {
    return [
        'nif' => $faker->randomDigit,
        'nom' => $faker->name,
        'persona_contacte' => $faker->name,
        'email' => $faker->email,
        'tel' => $faker->phoneNumber,
        'web' => $faker->name,
        'adreca' => $faker->streetAddress,
        'poblacio' => $faker->city,
        'codi_postal' => $faker->randomDigit,
        'tipus_activitat' => $faker->word,
        'password' => $faker->password
    ];
});
