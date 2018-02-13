<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActivitatEntitatTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activitat_entitat', function (Blueprint $table) {
            $table->integer('activitat_id')->unsigned();
            $table->integer('entitat_id')->unsigned();
            $table->foreign('activitat_id')
                ->references('id')
                ->on('activitats')
                ->onDelete('cascade');
            $table->foreign('entitat_id')
                ->references('id')
                ->on('entitats')
                ->onDelete('cascade');
            $table->primary(['activitat_id', 'entitat_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('activitat_entitat', function (Blueprint $table) {
            //
        });
    }
}
