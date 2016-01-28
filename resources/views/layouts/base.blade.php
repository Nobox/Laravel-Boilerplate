<!doctype html>
<html class="no-js" lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

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
    </head>

    @section('body-open')
        <body>
    @show

        @yield('body')

        @section('scripts-plugins')
            {{-- Plugin scripts --}}
        @show
    </body>
</html>
