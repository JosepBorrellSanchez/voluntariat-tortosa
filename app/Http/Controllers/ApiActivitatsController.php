<?php

namespace App\Http\Controllers;

use App\Activitat;
use Illuminate\Http\Request;

class ApiActivitatsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Activitat::all();
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
    public function destroy(Activitat $activitat)
    {
        $activitat->delete();

        return $activitat;
    }
}
