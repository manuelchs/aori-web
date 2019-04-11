<?php

if ( $_SERVER['SERVER_NAME'] == '127.0.0.1' ) {
    $branding = 'branding.php';
    $consultoria = 'consultoria-de-negocios.php';
    $web = 'desarrollo-web.php';
    $clips = 'miniclips-y-fotografia-comercial.php';
    $digitales = 'publicidad-en-medios-digitales.php';
    $impresos = 'publicidad-impresa.php';

} else {
    $branding = 'branding';
    $consultoria = 'consultoria-de-negocios';
    $web = 'desarrollo-web';
    $clips = 'miniclips-y-fotografia-comercial';
    $digitales = 'publicidad-en-medios-digitales';
    $impresos = 'publicidad-impresa';
}
?>