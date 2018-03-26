<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEntityInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entity_infos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->string('nif')->nullable();
            $table->string('persona_contacte')->nullable();
            $table->string('email')->nullable();
            $table->integer('tel')->nullable();
            $table->string('web')->nullable();
            $table->string('adreca')->nullable();
            $table->string('poblacio')->nullable();
            $table->integer('codi_postal')->nullable();
            $table->text('tipus_activitat')->nullable();
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
        Schema::dropIfExists('entityinfo');
    }
}
