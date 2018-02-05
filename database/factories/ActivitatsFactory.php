<?php

use Faker\Generator as Faker;

$factory->define(App\Activitats::class, function (Faker $faker) {
    return [
        'nom' => $faker->name,
        'ambit' => 'Escolar',
        'descripcio' => $faker->text,
        'destinataris' => $faker->word,
        'hora_inici' => $faker->time($format = 'H:i:s', $max = 'now'),
        'hora_fi' => $faker->time($format = 'H:i:s', $max = 'now'),
        'tipus_horari' => $faker->randomElement($array = array('Puntual','Periodic')),
        'num_voluntaris_necessaris' => $faker->randomDigit,
        'coneixements_req' => $faker->sentence($nbWords = 6, $variableNbWords = true),
        'habilitats_req' => $faker->sentence($nbWords = 6, $variableNbWords = true),
        'experiencia_req' => $faker->sentence($nbWords = 6, $variableNbWords = true),
        'titols_formacio_req' => $faker->sentence($nbWords = 6, $variableNbWords = true),
        'idiomes_req' => $faker->sentence($nbWords = 6, $variableNbWords = true),
        'disponibilitat_vehicle_req' => $faker->boolean($chanceOfGettingTrue = 50),
        'condicio_fisica_req' => $faker->randomElement($array = array('Atletica', 'Normal', 'Qualsevol')),
        'sexe_req' => $faker->randomElement($array = array('home', 'dona', 'qualsevol'))
    ];
});
