<div class="main-wrapper grid-info">
    <div class="grid-row">
        <div class="info-wrapper fade fade-left">
            <div class="info">
                <img src="#/img/consultoria.png" alt="Servicio de consultoría por AORI">
                <h4 class="subtitle">Consultoría de Negocios</h4>
                <p class="grid-desc">Aterriza tu idea de negocio o haz crecer tu negocio actual con nuestra consultoría.</p>
                <a href="<?php echo $consultoria; ?>" class="service-button" service="consultoria">> Ver más</a>
            </div>
        </div>
        <div class="info-wrapper fade fade-top">
            <div class="info">
                <img src="#/img/branding.png" alt="Servicio de branding por AORI">
                <h4 class="subtitle">Branding</h4>
                <p class="grid-desc">Deja de buscar quien te diseñe tu logo y mejor céntrate en quien te desarrolle una marca.</p>
                <a href="<?php echo $branding; ?>" class="service-button" service="branding">> Ver más</a>
            </div>
        </div>
        <div class="info-wrapper fade fade-right">
            <div class="info">
                <img src="#/img/clips.png" alt="Servicio de video por AORI">
                <h4 class="subtitle">Miniclips y fotografía</h4>
                <p class="grid-desc">México es el cuarto país que más consume video en el mundo. Comunícate adecuadamente con el tuyo.</p>
                <a href="<?php echo $clips; ?>" class="service-button" service="clips">> Ver más</a>
            </div>
        </div>
    </div>
    <div class="grid-row">
        <div class="info-wrapper fade fade-left">
            <div class="info">
                <img src="#/img/web.png" alt="Servicio de desarrollo web por AORI">
                <h4 class="subtitle">Desarrollo Web y Apps</h4>
                <p class="grid-desc">Tu plataforma digital debe impulsar tus resultados comerciales si esta cuidadosamente diseñada para tu mercado meta.</p>
                <a href="<?php echo $web; ?>" class="service-button" service="web">> Ver más</a>
            </div>
        </div>
        <div class="info-wrapper fade fade-bottom">
            <div class="info">
                <img src="#/img/digital.png" alt="Servicio digital por AORI">
                <h4 class="subtitle">Publicidad en Medios Digitales</h4>
                <p class="grid-desc">Generamos tu campaña de comunicación digital, con el objetivo de traer a ti los resultados que esperas.</p>
                <a href="<?php echo $digitales; ?>" class="service-button" service="digitales">> Ver más</a>
            </div>
        </div>
        <div class="info-wrapper fade fade-right">
            <div class="info">
                <img src="#/img/impreso.png" alt="Servicio impreso por AORI">
                <h4 class="subtitle">Publicidad impresa</h4>
                <p class="grid-desc">Si lo que buscas es asesoría, calidad y el mejor precio. Entonces estas en el lugar indicado.</p>
                <a href="<?php echo $impresos; ?>" class="service-button" service="impresos">> Ver más</a>
            </div>
        </div>
    </div>
</div>

<script>
    if (location.pathname != '/') {
        $('.grid-desc').remove();
    }
</script>