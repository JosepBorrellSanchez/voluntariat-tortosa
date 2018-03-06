<?php

namespace App\Http\Controllers;

use App\Activitat;
use Illuminate\Http\Request;

class ActivitatsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $activitats = Activitat::all();

//        return view('activitats.index', compact('activitats'));
      return view('voluntariat.index');
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
        return view('activitats.show', compact('activitat'));
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
    public function update(Request $request, Activitat $activitats)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Activitat  $activitats
     * @return \Illuminate\Http\Response
     */
    public function destroy(Activitat $activitats)
    {
      $activitats->delete();

      return $activitats;
    }
}
