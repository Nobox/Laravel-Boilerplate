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

        @section('analytics')
            {{-- Google Analytics --}}
            <script>
                (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
                function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
                e=o.createElement(i);r=o.getElementsByTagName(i)[0];
                e.src='https://www.google-analytics.com/analytics.js';
                r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));

                ga('create', '{{ env("GA_TRACKING_ID", "UA-XXXXX-X") }}', 'auto');
                ga('send', 'pageview');

                @if (empty(env('GA_TRACKING_ID')) || env('GA_TRACKING_ID') == 'UA-XXXXX-X')
                    console.warn('Warning: Remember to set a valid Google Analytics property tracking ID.');
                @endif
            </script>
        @show

        @section('scripts-plugins')
            {{-- Plugin scripts --}}
        @show

        @section('scripts-site')
            {{-- Site scripts --}}
        @show

        @section('scripts-media')
            {{-- Media tracking scripts, loaded last --}}
        @show
    </body>
</html>
