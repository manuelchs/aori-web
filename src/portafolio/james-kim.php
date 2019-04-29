<!DOCTYPE html>
<html lang="es">
<head>
    <?php include("../inc/head.html") ?>
    <title>AORI Portafolio - James Kim</title>
</head>
<body>
    <?php include("../inc/lightbox.html"); ?>
    <?php include("../inc/navbar.html") ?>
    <section class="desfase-navbar hero-portafolio jk">
        <div class="info-project">
            <div class="logo-icons">
                <img class="project-logo" src="#/img/portafolio/jk-logo.png" alt="Logo JK">
                <div class="project-icons">
                    <div class="icon-wrapper">
                        <img src="#/img/branding.png" alt="JK branding">
                        <span>Branding</span>
                    </div>
                    <div class="icon-wrapper">
                        <img src="#/img/impreso.png" alt="JK impreso">
                        <span>Publicidad Impresa</span>
                    </div>
                </div>
            </div>
            <div class="project-desc">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim a</p>
            </div>
        </div>
    </section>
    <section class="project">
        <div class="main-wrapper">
            <div class="project-stage">
                <h2 class="title">desarrollo de marca</h2>
                <div class="stage-img">
                    <img class="lightbox-item bg" src="#/img/portafolio/jk/jk-1.png" alt="JK ejemplo 1">
                </div>
                <div class="stage-desc">
                    <p>Conceptualización y desarrollo de logo.</p>
                    <div class="marco"></div>
                </div>
            </div>
            <div class="project-stage">
                <h2 class="title">impreso</h2>
                <div class="stage-img">
                    <img class="lightbox-item" src="#/img/portafolio/jk/jk-2.png" alt="JK ejemplo 2">
                </div>
                <div class="stage-desc">
                    <p>Material impreso de branding</p>
                    <div class="marco"></div>
                </div>
            </div>
        </div>
    </section>
    <?php include("../inc/portafolio-slider.php") ?>
    <?php include("../inc/footer.html") ?>
</body>
</html>