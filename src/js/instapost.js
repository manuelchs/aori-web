var instaWidth = '100%';
var animating = false;
$( function() {
    for (let index = 0; index < $('.instapost-item').length; index++) {
        $('#references').append('<div class="reference"></div>');
    }
    instaWidth = ($('.instapost-item').length * 100);
    $('#instapost').css( 'width', instaWidth + '%' );
    $('#instapost').css('margin-left', '0');
    setButtons();
    setReference();

    $('#instaLeft').click(function() {
        if ( !animating ) {
            instaLeft();
        }
    });

    $('#instaRight').click(function() {
        if ( !animating ) {
            instaRight();
        }
    });

    var region = new ZingTouch.Region( document.getElementById('instapost'), true , false );
    var target = document.getElementById('instapost');
    region.bind(target, 'swipe', function(e) {
        let angle = e.detail.data[0].currentDirection;
        if ((angle >= 315 && angle <= 360) || (angle <= 45 && angle >= 0)) {
            direction = 'right';
        }
        else if (angle >= 135 && angle <= 225) {
            direction = 'left';
        }
        else if (angle <= 135) {
            direction = 'up';
            return;
        } else {
            direction = 'down';
            return;
        }
        if ( direction === 'right' ) {
            if ( window.screen.width <= breakPoint  ) {
                if ( !animating ) {
                    instaLeft();
                }
            }
        } else if ( direction === 'left' ) {
            if ( window.screen.width <= breakPoint  ) {
                if ( !animating ) {
                    instaRight();
                }
            }
        }
    });
});

function instaRight() {
    animating = true;
    var insta = document.getElementById('instapost');
    var marginToMove = ((Math.abs(parseInt(insta.style.marginLeft)) + 100) * -1) + '%';
    console.log(parseInt(marginToMove));
    if ( parseInt(marginToMove) > (instaWidth * -1) ) {
        $('#instapost').animate({ marginLeft: marginToMove }, 300, function() {
            animating = false;        
            setButtons();
            setReference();
        });
    } else {
        animating = false;
    }
}

function instaLeft() {
    animating = true;
    var insta = document.getElementById('instapost');
    var marginToMove = ((Math.abs(parseInt(insta.style.marginLeft)) - 100) * -1) + '%';
    console.log(parseInt(marginToMove));
    if ( parseInt(marginToMove) <= 0) {
        $('#instapost').animate({ marginLeft: marginToMove }, 300, function() {
            animating = false;
            setButtons();
            setReference();
        });
    } else {
        animating = false;
    }
}

function setButtons() {
    if ( screen.width > 768 ) {
        var insta = document.getElementById('instapost');
        if ( $('#instapost').css('margin-left') == '0px' ) {
            $('#instaLeft').css('display', 'none');
            $('#instaRight').css('display', 'block');
        } else if ( insta.style.marginLeft == ((instaWidth - 100) * -1 ) + '%' ) {
            $('#instaLeft').css('display', 'block');
            $('#instaRight').css('display', 'none');
        } else {
            $('#instaLeft').css('display', 'block');
            $('#instaRight').css('display', 'block');
        }
    }
}

function setReference() {
    var insta = document.getElementById('instapost');
    $('#references').find('.active').removeClass('active');
    $($('.reference')[Math.abs(parseInt(insta.style.marginLeft)) / 100]).addClass('active');
}
