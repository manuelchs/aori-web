var breakPoint = 900;
$(function() {

    $('.slider-item:last').insertBefore('.slider-item:first');
    if ( window.screen.width <= breakPoint  ) {
        $('#slider').css('margin-left','-85%');
    } else {
        $('#slider').css('margin-left','-33.3333333%');
    }
    $( window ).resize(function() {
        if ( window.screen.width <= breakPoint  ) {
            $('#slider').css('margin-left','-85%');
        } else {
            $('#slider').css('margin-left','-33.3333333%');
        }
    });
    activeElement(2);

    $('#arrowLeft').click(function(){
        moverI();
    });
    
    $('#arrowRight').click(function(){
        moverD();
    });

    $('.slider-item').click(function() {
        if( $(this)[0] == $('.slider-item')[1] ) {
            moverI();
        } else if( $(this)[0] == $('.slider-item')[3] ) {
            moverD();
        } else {
            var loc = $(this).attr('location');
            location.href = loc;
        }
    });

    var region = new ZingTouch.Region( document.getElementById('slider'), true , false );
    var target = document.getElementById('slider');
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
            if ( window.screen.width <= breakPoint  ) {
                moverI();
            }
        } else if ( direction === 'left' ) {
            if ( window.screen.width <= breakPoint  ) {
                moverD();
            }
        }
    });
});

function activeElement(index) {
    $('.active').removeClass('active');
    var element = $('.slider-item')[index];
    $(element).addClass('active');
}

function moverI() {
    activeElement(1);
    var margenTope = window.screen.width <= breakPoint ? '-35%' : '0%';
    var margenFinal = window.screen.width <= breakPoint ? '-85%' : '-33.333333%';
    
    $('#slider').animate({marginLeft: margenTope}, 300, function(){
        $('.slider-item:last').insertBefore('.slider-item:first');
        $('#slider').css('margin-left', margenFinal );
        activeElement(2);
    });
}

function moverD() {
    activeElement(3);
    var margenTope = window.screen.width <= breakPoint ? '-135%' : '-66.6666666%';
    var margenFinal = window.screen.width <= breakPoint ? '-85%' : '-33.333333%';
    $('#slider').animate({marginLeft: margenTope}, 300,function(){
        $('.slider-item:first').insertAfter('.slider-item:last');
        $('#slider').css('margin-left', margenFinal);
        activeElement(2);
    });
}