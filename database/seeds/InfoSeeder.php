<?php

use App\VolunteerInfo;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class InfoSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run() {
    $info = VolunteerInfo::find(3);
    $info->cognoms = 'User2 cognoms';
    $info->dni = '39944433W';
    $info->adreca = 'C/Algo 5';
    $info->data_naixement = Carbon::now();
    $info->nacionalitat = 'Anglesa';
    $info->codi_postal = 43500;
    $info->poblacio = 'Tortosa';
    $info->telefon = 999332255;
    $info->llengues = 'esp, cat, ang';
    $info->disponibilitat_mensual = 'juny, juliol, agost';
    $info->disponibilitat_diaria = 'dilluns-divendres';
    $info->disponibilitat_vehicle = false;
    $info->franges_edat_preferents = '3-15';
    $info->condicio_fisica = 'atlètica';
    $info->validat = true;
    $info->save();
  }
}