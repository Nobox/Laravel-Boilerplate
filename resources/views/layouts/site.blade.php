@extends('layouts.base')

@section('prefetch')
    <link rel="dns-prefetch" href="https://code.jquery.com">
@show

@section('body-open')
    <body data-route="{{ Route::currentRouteName() }}">
@stop

@section('body')
    @yield('view-content')
@stop

@section('scripts-plugins')
    <script src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
    <script>window.jQuery || document.write('<script src="bower_components/jquery/dist/jquery.min.js"><\/script>')</script>
@stop
