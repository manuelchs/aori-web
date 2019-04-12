var breakPoint = 900;
$(function() {

    $('.slider-services-sec-item:last').insertBefore('.slider-services-sec-item:first');
    if ( window.screen.width <= breakPoint  ) {
        $('#sliderServices').css('margin-left','-100%');
    } else {
        $('#sliderServices').css('margin-left','-50%');
    }
    $( window ).resize(function() {
        if ( window.screen.width <= breakPoint  ) {
            $('#sliderServices').css('margin-left','-100%');
        } else {
            $('#sliderServices').css('margin-left','-50%');
        }
    });

    $('#left-button').click(function(){
        servicesMoverI();
    });
    
    $('#right-button').click(function(){
        servicesMoverD();
    });


    var region = new ZingTouch.Region( document.getElementById('sliderServices'), true , false );
    var target = document.getElementById('sliderServices');
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
                servicesMoverI();
            }
        } else if ( direction === 'left' ) {
            console.log('swipe');
            if ( window.screen.width <= breakPoint  ) {
                servicesMoverD();
            }
        }
    });
});

function servicesMoverI() {
    var margenTope = window.screen.width <= breakPoint ? '0%' : '0%';
    var margenFinal = window.screen.width <= breakPoint ? '-100%' : '-50%';
    
    $('#sliderServices').animate({marginLeft: margenTope}, 300, function(){
        $('.slider-services-sec-item:last').insertBefore('.slider-services-sec-item:first');
        $('#sliderServices').css('margin-left', margenFinal );
    });
}

function servicesMoverD() {
    var margenTope = window.screen.width <= breakPoint ? '-200%' : '-100%';
    var margenFinal = window.screen.width <= breakPoint ? '-100%' : '-50%';
    $('#sliderServices').animate({marginLeft: margenTope}, 300,function(){
        $('.slider-services-sec-item:first').insertAfter('.slider-services-sec-item:last');
        $('#sliderServices').css('margin-left', margenFinal);
    });
}