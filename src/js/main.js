$(function() {
    // Main functions
    getInstaInfo();

    $('.play-button').click(function() {
        console.log('Abrir video');
        console.log($(this).attr('videoId'));
        $('#frameVideo').attr('src', 'https://www.youtube.com/embed/' + $(this).attr('videoId') + '?autoplay=1&color=white&rel=0&showinfo=0');
        $('.modal-video').addClass('modal-show');
    });

    $('.close-modal').click(function() {
        closeModal();
    });

    document.getElementById('frameVideo').onload = function() {
        console.log('LOADED');
        $('#loader').addClass('d-none');
        $('#frameVideo').removeClass('d-none');
    };
});

function getInstaInfo() {
    $.ajax({
        url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=6198903881.4124187.37a2fe49194a4856bef88df37518294d&COUNT=2',
    }).done(function(response) {
        if ( response['meta']['code'] == 200 ) {
            instaFeed(response['data']);

        } else {
            console.log( 'Ocurrió un error al obtener la inforamción de instagram' );
        }
    });
}

function instaFeed(data) {
    var numFotos = window.screen.width < 900 ? 9 : 6;
    console.log(data);
    var images = new Array();
    // Get the image and username
    $('#instaProfile').attr('src',data[0]['user']['profile_picture']);
    $('#instaUser').text('@' + data[0]['user']['username']);
    $('.instaLinkUser').attr('href','https://www.instagram.com/'+ data[0]['user']['username'] +'/');

    // Get the images
    $(data).each(function(index, obj) {
        if(index < numFotos) {
            $('#instaFeed').append(
                '<a href="'+ obj['link'] +'" target="_blank" style="background-image: url('+ obj['images']['low_resolution']['url'] +');"></a>'
            );
        }
    });
}

function closeModal() {
    $('iframe').attr('src', '');
    $('.modal-show').removeClass('modal-show');
    setTimeout( function() {
        $('#loader').removeClass('d-none');
        $('#frameVideo').addClass('d-none');
        $('iframe').addClass('d-none');
    }, 200)
}

function clickModalToClose(e, modal) {
    if(modal == e.target) {
        closeModal();
    }
}