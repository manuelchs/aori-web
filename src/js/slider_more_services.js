var breakPoint = 900;
$(function() {

    $('.ms-slider-item:last').insertBefore('.ms-slider-item:first');
    if ( window.screen.width <= breakPoint  ) {
        $('#ms-slider').css('margin-left','-100%');
    } else {
        $('#ms-slider').css('margin-left','-33.3333333%');
    }
    $( window ).resize(function() {
        if ( window.screen.width <= breakPoint  ) {
            $('#ms-slider').css('margin-left','-100%');
        } else {
            $('#ms-slider').css('margin-left','-33.3333333%');
        }
    });

    $('#ms-arrowLeft').click(function(){
        moverI();
    });
    
    $('#ms-arrowRight').click(function(){
        moverD();
    });

    $('.ms-slider-item').click(function() {
        if( $(this)[0] == $('.ms-slider-item')[1] ) {
            moverI();
        } else if( $(this)[0] == $('.ms-slider-item')[3] ) {
            moverD();
        } else {
            $('.modal-construccion').addClass('modal-show');
            console.log('click');
        }
    });

    var region = new ZingTouch.Region( document.getElementById('ms-slider'), true , false );
    var target = document.getElementById('ms-slider');
    region.bind(target, 'swipe', function(e){
    console.log(e);
    let angle = e.detail.data[0].currentDirection;
        if ((angle >= 315 && angle <= 360) || (angle <= 45 && angle >= 0)) {
            direction = "right";
        }
        else if (angle >= 135 && angle <= 225) {
            direction = "left";
        }
        else if (angle <= 135) {
            direction = "up";
            return;
        } else {
            direction = "down";
            return;
        }
        if ( direction === 'right' ) {
            console.log('swipe');
            if ( window.screen.width <= breakPoint  ) {
                moverI();
            }
        } else if ( direction === 'left' ) {
            console.log('swipe');
            if ( window.screen.width <= breakPoint  ) {
                moverD();
            }
        }
    });
});

function moverI() {
    var margenTope = window.screen.width <= breakPoint ? '0%' : '0%';
    var margenFinal = window.screen.width <= breakPoint ? '-100%' : '-33.333333%';
    
    $('#ms-slider').animate({marginLeft: margenTope}, 300, function(){
        $('.ms-slider-item:last').insertBefore('.ms-slider-item:first');
        $('#ms-slider').css('margin-left', margenFinal );
    });
}

function moverD() {
    var margenTope = window.screen.width <= breakPoint ? '-200%' : '-66.6666666%';
    var margenFinal = window.screen.width <= breakPoint ? '-100%' : '-33.333333%';
    $('#ms-slider').animate({marginLeft: margenTope}, 300,function(){
        $('.ms-slider-item:first').insertAfter('.ms-slider-item:last');
        $('#ms-slider').css('margin-left', margenFinal);
    });
}