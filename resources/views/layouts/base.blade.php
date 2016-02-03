<!doctype html>
<html class="no-js" lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Make sure our staging/dev sites aren't crawled by search engines --}}
        @if ('production' != app()->environment())
            <meta name="robots" content="noindex">
        @endif

        @section('title')
            <title>Nobox Boilerplate</title>
        @show

        @section('meta')
            <meta name="description" content="">
        @show

        <link rel="author" href="humans.txt">

        @section('prefetch')
            {{-- DNS prefetches --}}
        @show

        @section('stylesheets')
            {{-- Stylesheets --}}
        @show

        @section('scripts-head')
            {{-- JS absolutely required in the <head> --}}
        @show
    </head>

    @section('body-open')
        <body>
    @show

        @yield('body')

        @section('scripts-plugins')
            {{-- Plugin scripts --}}
        @show

        @section('scripts-site')
            {{-- Site scripts --}}
        @show
    </body>
</html>
