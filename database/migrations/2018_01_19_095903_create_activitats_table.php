<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActivitatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activitats', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nom');
            $table->enum('ambit', ['Cultura', 'Escolar', 'Artístic', 'Esportiu', 'Lleure', 'Suport']);
            $table->string('descripcio');
            $table->string('destinataris');
            $table->time('hora_inici');
            $table->time('hora_fi');
            $table->enum('tipus_horari', ['Puntual', 'Periodic']);
            $table->integer('num_voluntaris_necessaris');
            $table->string('coneixements_req');
            $table->string('habilitats_req');
            $table->string('experiencia_req');
            $table->string('titols_formacio_req');
            $table->string('idiomes_req');
            $table->boolean('disponibilitat_vehicle_req');
            $table->enum('condicio_fisica_req', ['Atlètica', 'Normal', 'Qualsevol']);
            $table->enum('sexe_req', ['home', 'dona', 'qualsevol']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activitats');
    }
}
