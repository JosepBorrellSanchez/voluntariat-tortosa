<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVolunteerInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('volunteer_infos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->string('cognoms')->nullable();
            $table->string('dni')->nullable();
            $table->string('adreca')->nullable();
            $table->date('data_naixement')->nullable();
            $table->string('nacionalitat')->nullable();
            $table->integer('codi_postal')->nullable();
            $table->string('poblacio')->nullable();
            $table->integer('telefon')->nullable();
            $table->string('llengues')->nullable();
            $table->string('disponibilitat_mensual')->nullable();
            $table->string('disponibilitat_setmanal')->nullable();
            $table->string('disponibilitat_diaria')->nullable();
            $table->string('disponibilitat_horaria')->nullable();
            $table->boolean('disponibilitat_vehicle')->nullable();
            $table->string('franges_edat_preferents')->nullable();
            $table->string('condicio_fisica')->nullable();
            $table->boolean('validat')->default(false);
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
        Schema::dropIfExists('volunteer_infos');
    }
}
