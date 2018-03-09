<?php

use App\User;
use Faker\Generator as Faker;

$factory->define(App\Activitat::class, function (Faker $faker) {
    return [
//        'user_id' => factory(User::class)->create()->id,
        'user_id' => User::first(),
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
