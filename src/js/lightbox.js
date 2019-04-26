$(function(){
    $('.lightbox-item').click(function() {
        if ( $(this).hasClass('video') ) {
            $('#frameVideoLightbox').attr('src','https://www.youtube.com/embed/' + $(this).attr('youtube') + '?autoplay=1&color=white&rel=0&showinfo=0');
            $('#imageGallery').addClass('d-none');
            $('#loader').removeClass('d-none');
        } else {
            $('#imageGallery').attr('src',$(this).attr('src'));
            $('#imageGallery').removeClass('d-none');
            $('#frameVideoLightbox').addClass('d-none');
            $('#loader').addClass('d-none');
        }
        if ( $(this).hasClass('bg') ) {
            $('#imageGallery').addClass('bg');
        } else {
            $('#imageGallery').removeClass('bg');
        }
        $('#lightbox').addClass('modal-show');
    });
    document.getElementById('frameVideoLightbox').onload = function() {
        console.log('LOADED');
        $('#loader').addClass('d-none');
        $('#frameVideoLightbox').removeClass('d-none');
    };
});