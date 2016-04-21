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

@section('scripts-head')
    <script>
      // Picture element HTML5 shiv
      document.createElement('picture');
    </script>
@stop

@section('body')
    @yield('view-content')
@stop

@section('scripts-plugins')
    {{-- matchMedia Polyfill --}}
    <!--[if lte IE 9]>
    <script src="/bower_components/matchMedia/matchMedia.js"></script>
    <script src="/bower_components/matchMedia/matchMedia.addListener.js"></script>
    <![endif]-->

    {{-- Modernizr --}}
    <script src="{{ elixir('js/vendor/modernizr-custom.js') }}"></script>

    {{-- jQuery --}}
    <script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
    <script>window.jQuery || document.write('<script src="/bower_components/jquery/dist/jquery.min.js"><\/script>')</script>
@stop

@section('scripts-site')
    {{-- Site bundle --}}
    <script src="{{ elixir('js/bundle.js') }}"></script>
@stop
