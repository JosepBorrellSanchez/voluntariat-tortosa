<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Voluntariat') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
</head>
<body>
    <div class="container">
        <header class="logo">
            <a href="/">Voluntariat</a>
        </header>
        <nav class="">
                <svg class="hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/activitats">Activitats</a></li>
            </ul>
        </nav>

        <aside class="left-side-bar">Left</aside>
    </div>
</body>
</html>