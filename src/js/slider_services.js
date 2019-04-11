var breakPoint = 900;
var first = true;
$(function() {
    $('.slider-services-sec-button').click(function() {
        if($(this).hasClass('left-button')) {
            sliderI('#' + $(this).parent().find('.slider-services-sec')[0].id);
        } else {
            sliderD('#' + $(this).parent().find('.slider-services-sec')[0].id);            
        }
    });
});

function sliderI(slider) {
    if ( first && window.screen.width <= breakPoint ) {
        $(slider).find('.slider-services-sec-item:last').insertBefore($(slider).find('.slider-services-sec-item:first'));        
        $(slider).css('margin-left', '-100%' );
    } else if ( first ) {
        
    }
    var margen = window.screen.width <= breakPoint ? '-100%' : '-50%';
    $(slider).animate({marginLeft: 0}, 300, function(){
        // $('.slider-item:last').insertBefore('.slider-item:first');
        $(slider).find('.slider-services-sec-item:last').insertBefore($(slider).find('.slider-services-sec-item:first'));        
        $(slider).css('margin-left', margen );
    });
    first = false;
}

function sliderD(slider) {
    if ( first && window.screen.width <= breakPoint) {
        $(slider).find('.slider-services-sec-item:last').insertBefore($(slider).find('.slider-services-sec-item:first'));        
        $(slider).css('margin-left', '-100%' );
    }
    var margenRecorrido = window.screen.width <= breakPoint ? '-200%' : '-100%';
    var margenFinal = window.screen.width <= breakPoint ? '-100%' : '-50%';
    console.log('Se va a recorrer: ' + margenRecorrido);
    $(slider).animate({marginLeft: margenRecorrido}, 300,function(){
        $('.slider-item:first').insertAfter('.slider-item:last');
        $(slider).find('.slider-services-sec-item:first').insertAfter($(slider).find('.slider-services-sec-item:last'));        
        $(slider).css('margin-left', margenFinal );
    });
    first = false;
}