<!DOCTYPE html>
<html lang="es">
<head>
    <?php include("#/inc/head.html") ?>
    <script src="#/js/slider_services.js"></script>
    <title>AORI - Miniclips y fotografías</title>
</head>
<body>
    <?php include("#/inc/navbar.html") ?>
    <section class="desfase-navbar hero-services hero-clips">
        <div class="overlay"></div>
        <div class="main-wrapper">
            <div class="main-wrapper-services-sec">
                <h1 class="title underline ul-left">Miniclips y Fotografía<br>Comercial</h1>
            </div>
            <img class="service-icon" src="#/img/services/clips/clips-icon.png" alt="">
        </div>
    </section>
    <section class="service-info">
        <div class="main-wrapper">
            <div class="main-wrapper-services-sec">
                <p class="service-description">Toda plataforma digital o desarrollo de marca debe ir acompañado con elementos visuales de calidad.<br><br>Contamos con equipos de fotografía y producción de video "in house". Todas nuestras producciones se distinguen de la competencia dado a que enfocamos los esfuerzos a extraer contenido comercialmente atractativos. Esto nos permite generar un producto final que de como resultado ventas o posicionamiento a nuestros clientes.</p>
            </div>
            <div class="main-wrapper-services-sec">
                <h2 class="title">Principales servicios dentro de esta área:</h2>
                <div class="services-sec-list">
                    <div class="list-item"><span class="counter">a.</span><span>Mini clips para promoción de producto o servicio.</span></div>
                    <div class="list-item"><span class="counter">b.</span><span>Video Corporativo o Institucional.</span></div>
                    <div class="list-item"><span class="counter">c.</span><span>Fotografía de Productos o Ubicación.</span></div>
                    <div class="list-item"><span class="counter">d.</span><span>Retoque de Fotografía y Composición.</span></div>
                </div>
            </div>
            <div class="main-wrapper-services-sec-large">
                <div class="slider-services-sec-wrapper">
                    <div id="left-button" class="slider-services-sec-button left-button">
                        <img src="#/img/arrow-left.png" alt="">
                    </div>
                    <div id="right-button" class="slider-services-sec-button right-button">
                        <img src="#/img/arrow-right.png" alt="">
                    </div>
                    <div id="sliderServices" class="slider-services-sec">
                        <div class="slider-services-sec-item sm1">
                            <img src="#/img/services/clips/clips-example-1.png" alt="">
                            <p class="slider-desc">Fotografía de Producto</p>
                            <p class="brand-info">HB HANDBAGS</p>
                        </div>
                        <div class="slider-services-sec-item sm2">
                            <img src="#/img/services/clips/clips-example-2.png" alt="">
                            <p class="slider-desc">Composición Fotográfica</p>
                            <p class="brand-info">DR. juan manuel riestra</p>
                        </div>
                        <div class="slider-services-sec-item sm3">
                            <img src="#/img/services/clips/clips-example-3.png" alt="">
                            <p class="slider-desc">Video Explainer</p>
                            <p class="brand-info">here you win</p>
                        </div>
                        <div class="slider-services-sec-item sm4">
                            <img src="#/img/services/clips/clips-example-4.png" alt="">
                            <p class="slider-desc">Video institucional</p>
                            <p class="brand-info">git instructores tácticos</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="services-sec-line"></div>
        </div>
    </section>
    <?php include("#/inc/more_services_slider.php"); ?>
    <?php include("#/inc/footer.html") ?>
</body>
</html>