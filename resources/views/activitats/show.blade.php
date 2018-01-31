@extends('layouts.voluntariat')

@section('content')
    <div class="container">
        <h1>{{ $activitat->nom }}</h1>
        <section>
            <span>{{ $activitat->descripcio }}</span>
        </section>
    </div>
@endsection
