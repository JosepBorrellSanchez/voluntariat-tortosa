@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>Activitats</h1>
        @foreach($activitats as $activitat)
            <section>
                <h3>
                    <a href="{{ url('/activitats/' . $activitat->id) }}">{{ $activitat->nom }}</a>
                </h3>
                <p>{{ $activitat->descripcio }}</p>
            </section>
        @endforeach
    </div>
@endsection
