@extends('layouts.base')

@section('prefetch')
    <link rel="dns-prefetch" href="https://code.jquery.com">
@stop

@section('stylesheets')
    <link rel="stylesheet" href="{{ elixir('css/styles.css') }}">
@stop

@section('body-open')
    <body data-route="{{ Route::currentRouteName() }}">
@stop

@section('body')
    @yield('view-content')
@stop

@section('scripts-plugins')
    {{-- Modernizr --}}
    @if (file_exists(public_path(elixir('js/vendor/modernizr-custom.js'))))
        <script src="{{ elixir('js/vendor/modernizr-custom.js') }}"></script>
    @else
        <script src="{{ asset('bower_components/modernizr/modernizr.js') }}"></script>
        <script>console.warn('Warning: Using the bloated development version of Modernizr. Use a custom build.');</script>
    @endif

    {{-- jQuery --}}
    <script src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
    <script>window.jQuery || document.write('<script src="bower_components/jquery/dist/jquery.min.js"><\/script>')</script>
@stop

@section('scripts-site')
    {{-- Site bundle --}}
    <script src="{{ elixir('js/bundle.js') }}"></script>
@stop
