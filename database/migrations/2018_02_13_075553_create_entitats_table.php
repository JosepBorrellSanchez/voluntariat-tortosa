<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEntitatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entitats', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('nif');
            $table->string('nom');
            $table->string('persona_contacte');
            $table->string('email');
            $table->string('tel');
            $table->string('web');
            $table->string('adreca');
            $table->string('poblacio');
            $table->integer('codi_postal');
            $table->string('tipus_activitat');
            $table->string('password');
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
        Schema::dropIfExists('entitats');
    }
}
