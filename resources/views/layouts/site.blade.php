@extends('layouts.base')

@section('meta')
    @parent

    {{-- Add to homescreen for Chrome on Android --}}
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="application-name" content="{{ config('meta.app.name') }}">
    <link rel="icon" sizes="192x192" href="/img/touch/chrome-touch-icon-192x192.png">

    {{-- Add to homescreen for Safari on iOS --}}
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="{{ config('meta.brand.status-bar-color') }}">
    <meta name="apple-mobile-web-app-title" content="{{ config('meta.app.name') }}">
    <link rel="apple-touch-icon" href="/img/touch/apple-touch-icon.png">

    {{-- Tile icon for Win8 (144x144 + tile color) --}}
    <meta name="msapplication-TileImage" content="/img/touch/ms-touch-icon-144x144-precomposed.png">
    <meta name="msapplication-TileColor" content="{{ config('meta.brand.tile-color') }}">

    {{-- Color the status bar on mobile devices --}}
    <meta name="theme-color" content="{{ config('meta.brand.status-bar-color') }}">
@stop

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
