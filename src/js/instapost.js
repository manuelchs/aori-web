var instaWidth = '100%';
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
        instaLeft();
    });

    $('#instaRight').click(function() {
        instaRight();
    });
});

function instaRight() {
    var insta = document.getElementById('instapost');
    var marginToMove = ((Math.abs(parseInt(insta.style.marginLeft)) + 100) * -1) + '%';
    $('#instapost').animate({ marginLeft: marginToMove }, 300, function() {
        setButtons();
        setReference();
    });
}

function instaLeft() {
    var insta = document.getElementById('instapost');
    var marginToMove = ((Math.abs(parseInt(insta.style.marginLeft)) - 100) * -1) + '%';
    $('#instapost').animate({ marginLeft: marginToMove }, 300, function() {
        setButtons();
        setReference();
    });
}

function setButtons() {
    var insta = document.getElementById('instapost');
    console.log(((instaWidth - 100) * -1 ) + '%');
    console.log($('#instapost').css('margin-left'));
    if ( $('#instapost').css('margin-left') == '0px' ) {
        $('#instaLeft').css('display', 'none');
        $('#instaRight').css('display', 'block');
    } else if ( insta.style.marginLeft == ((instaWidth - 100) * -1 ) + '%' ) {
        console.log('entro chido')
        $('#instaLeft').css('display', 'block');
        $('#instaRight').css('display', 'none');
    } else {
        $('#instaLeft').css('display', 'block');
        $('#instaRight').css('display', 'block');
    }
}

function setReference() {
    var insta = document.getElementById('instapost');
    $('#references').find('.active').removeClass('active');
    $($('.reference')[Math.abs(parseInt(insta.style.marginLeft)) / 100]).addClass('active');
}
