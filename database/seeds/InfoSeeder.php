<?php

use App\VolunteerInfo;
use Carbon\Carbon;
use Faker\Factory;
use Illuminate\Database\Seeder;

class InfoSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run() {
    $this->seedVolunteerInfo();
    $this->seedEntityInfo();
  }

  public function seedVolunteerInfo() {
    $info = VolunteerInfo::first();
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

  public function seedEntityInfo() {
    $info = \App\EntityInfo::first();
    $info->nif = 'ASBBFFDDCC23';
    $info->persona_contacte = 'Miquel IZ';
    $info->email = 'entity@entity.com';
    $info->tel = 977343523;
    $info->web = 'entity.com';
    $info->adreca = 'C/ Misericordia 45';
    $info->poblacio = 'Tortosa';
    $info->codi_postal = '43500';
    $info->tipus_activitat = Factory::create()->text;
    $info->validat = true;
    $info->save();
  }
}