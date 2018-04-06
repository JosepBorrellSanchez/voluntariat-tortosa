<?php

namespace App\Http\Controllers;

use App\Activitat;
use App\Http\Requests\ListActivitats;
use App\User;
use Illuminate\Http\Request;
use League\Fractal\Resource\Collection;

class ApiActivitatsController extends Controller
{
    /**
     * Returns an array of all activities
     *
     *
     */
    public function index(ListActivitats $request)
    {
        $activitats = Activitat::all();
        return $activitats;
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Activitat  $activitats
     * @return \Illuminate\Http\Response
     */
    public function show(Activitat $activitat)
    {
        return $activitat;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Activitat  $activitats
     * @return \Illuminate\Http\Response
     */
    public function edit(Activitat $activitats)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Activitat  $activitats
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Activitat $activitat)
    {
      $activitat->nom =  $request->nom;
      $activitat->ambit = $request->ambit;
      $activitat->descripcio = $request->descripcio;
      $activitat->destinataris = $request->destinataris;
      $activitat->hora_inici = $request->hora_inici;
      $activitat->hora_fi = $request->hora_fi;
      $activitat->tipus_horari = $request->tipus_horari;
      $activitat->num_voluntaris_necessaris = $request->num_voluntaris_necessaris;
      $activitat->coneixements_req = $request->coneixements_req;
      $activitat->habilitats_req = $request->habilitats_req;
      $activitat->experiencia_req = $request->experiencia_req;
      $activitat->titols_formacio_req = $request->titols_formacio_req;
      $activitat->idiomes_req = $request->idiomes_req;
      $activitat->disponibilitat_vehicle_req = $request->disponibilitat_vehicle_req;
      $activitat->condicio_fisica_req = $request->condicio_fisica_req;
      $activitat->sexe_req = $request->sexe_req;
      $activitat->save();

      return $activitat;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Activitat  $activitats
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Activitat $activitat)
    {
        $activitat->delete();

        return $activitat;
    }
}
