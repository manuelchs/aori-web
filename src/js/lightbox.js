$(function(){
    $('.lightbox-item').click(function() {
        $('#lightbox').find('img').attr('src',$(this).attr('src'));
        $('#lightbox').addClass('modal-show');
    });
});