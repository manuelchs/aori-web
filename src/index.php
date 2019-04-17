<!DOCTYPE html>
<html lang="es">
<head>
    <?php include("#/inc/head.html") ?>
    <title>AORI MX</title>
</head>
<body>
    <?php include("#/inc/services_files_name.php") ?>
    <?php include("#/inc/navbar.html") ?>
    <section class="hero">
        <h1 class="page-title"><span class="word">brand</span><span class="title-bar"></span><span class="word">media</span><span class="title-bar"></span><span class="word">consulting</span></h1>
        <div class="path-hero">
            <img  class="hero-animated hero-1" src="#/img/hero/hero-1.png" alt="">
            <img  class="hero-animated hero-3" src="#/img/hero/hero-3.png" alt="">
            <img  class="hero-animated hero-2" src="#/img/hero/hero-2.png" alt="">
            <img  class="hero-pleca pleca-top" src="#/img/hero/pleca.png" alt="">
            <img  class="hero-pleca pleca-bottom" src="#/img/hero/pleca.png" alt="">
        </div>
        <img alt="Crossmedia AORI" title="Dispositivos para desarrollar" draggable="false" src="#/img/dispositivos.png" alt="">
    </section>
    <section id="about" class="about">
        <div class="main-wrapper">
            <img alt="Good design is good business" src="#/img/good-design-aori.png" alt="">
            <div class="about-txt">
                <h2 class="title underline high-margin mb-2">¿Quienes somos?</h2>
                <p>Somos una firma consultora de negocios enfocada a potencializar tus resultados por medio del uso de herramientas digitales.<br><br>Nuestra área de consultoría será la clave para que logres los objetivos comerciales y posicionamiento de marca deseas.<br><br>Nuestro objetivo es desarrollar los mejores modelos de negocio y herramientas digitales a nivel internacional.</p>
            </div>
        </div>
    </section>
    <section class="preview-video">
        <div class="play-button light" videoId="cNzldWOZsRw">
            <i class="fas fa-play"></i>
        </div>
        <img src="#/img/preview-1.gif" alt="">
    </section>
    <section class="method">
        <h2 class="title underline mb-2">metodología</h2>
        <div class="main-wrapper aori-cards">
            <div class="aori-card">
                <div class="background-wrapper">
                    <img class="background" src="#/img/img-a.png" alt="A de AORI fondo">
                </div>
                <img class="letter" src="#/img/a.png" alt="A de AORI letra">
                <div class="description-card">
                    <p>Análisis de proyecto</p>
                </div>
            </div>
            <div class="aori-card">
                <div class="background-wrapper">
                    <img class="background" src="#/img/img-o.png" alt="O de AORI fondo">
                </div>
                <img class="letter" src="#/img/o.png" alt="O de AORI letra">
                <div class="description-card">
                    <p>Optimización del modelo de negocio</p>
                </div>
            </div>
            <div class="aori-card">
                <div class="background-wrapper">
                    <img class="background" src="#/img/img-r.png" alt="R de AORI fondo">
                </div>
                <img class="letter right-space" src="#/img/r.png" alt="R de AORI letra">
                <div class="description-card">
                    <p>Resolución del problema o área de oportunidad</p>
                </div>
            </div>
            <div class="aori-card">
                <div class="background-wrapper">
                    <img class="background" src="#/img/img-i.png" alt="I de AORI fondo">
                </div>
                <img class="letter right-space" src="#/img/i.png" alt="I de AORI letra">
                <div class="description-card">
                    <p>Integración del proyecto o lanzamiento</p>
                </div>
            </div>
        </div>
    </section>
    <section class="method-exp">
        <div class="main-wrapper">
            <p>
            Nuestra metodología tiene sus cimientos basados en el marco ideológico del<br>
            <span>“Value Proposition Design”</span> y <span>“Canvas Business Model”</span><br>
            de Alexander Osterwalder. 
            </p>
        </div>
    </section>
    <section id="servicios" class="services">
        <h2 class="title underline ul-center">servicios</h2>
        <?php include("#/inc/services_grid.php"); ?>
    </section>
    <?php include("#/inc/portafolio-slider.php"); ?>
    <section class="preview-video">
        <div class="play-button light" videoId="DZc99ZndZaY">
            <i class="fas fa-play"></i>
        </div>
        <img src="#/img/preview-2.gif" alt="">
    </section>
    <section class="team">
        <h2 class="title underline ul-center">Nuestro equipo</h2>
        <p class="main-wrapper"><span>"Una empresa es tan buena como el equipo que la conforma." – Juan Riestra.</span><br><br>En AORI, nuestro equipo está compuesto por mercadologos, publirrelacionistas, diseñadores, ilustradores, animadores gráficos, programadores y expertos en impresión. Lo que hace que nuestros trabajos tengan un gran diseño que sea comercialmente efectivo.</p>
        <div class="main-wrapper team-cards">
            <div class="team-card">
                <img src="#/img/team-programacion.png" alt="">
                <div class="card-title">Equipo de programación</div>
            </div>
            <div class="team-card">
                <img src="#/img/team-diseno.png" alt="">
                <div class="card-title">Equipo de diseño</div>
            </div>
            <div class="team-card">
                <img src="#/img/team-comunicacion.png" alt="">
                <div class="card-title">Equipo de comunicación</div>
            </div>
        </div>
    </section>
    <section id="contacto" class="contact-ribbon">
        <div class="main-wrapper">
            <img src="#/img/te-gusta.png" alt="">
            <div>
                <p>Este podría ser tu sitio web.</p>
                <a>CONTÁCTANOS</a>
            </div>
        </div>
    </section>
    <section class="instagram">
        <div class="main-wrapper user-info-wrapper">
            <a class="instaLinkUser" href="" target="_blank"><img id="instaProfile" src="" alt=""></a>
            <p><a id="instaUser" class="instaLinkUser"></a><span> en instagram</span></p>
        </div>
        <div id="instaFeed"></div>
    </section>
    <?php include("#/inc/footer.html") ?>
    <div class="modal-wrapper modal-video" onclick="clickModalToClose(event, this)">
        <div class="close-modal"></div>
        <div id="loader" class="loader">
            <img src="#/img/logo-white.png" alt="">
        </div>
        <iframe id="frameVideo" class="d-none" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="modal-wrapper modal-construccion" onclick="clickModalToClose(event, this)">
        <div class="close-modal"></div>
        <div class="modal-content">
            <h2 class="title underline ul-left">sitio en construcción</h2>
            <p>Estamos trabajando en esta sección de nuestro sitio, por favor, vuelve más tarde. Gracias.</p>
            <button onclick="closeModal();" class="main-button">Continuar</button>
        </div>
    </div>
</body>
</html>