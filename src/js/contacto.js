$(function() {
    $( '#formContacto' ).submit(function( event ) {
        event.preventDefault();
        button = $(this).find('.main-button');
        $(button).addClass('load-button');
        $.post('/php/contacto.php',$('#formContacto').serialize(),
            function (data) {
                if ( data == 'success' ) {
                    setTimeout(function() {
                        $('#formContacto')[0].reset();
                        $(button).removeClass('load-button');                        
                        sendAlertSuccess('Hemos recibido tu mensaje. ¡En breve nos pondremos en contacto contigo! Gracias.');
                    }, 2500);
                } else {
                    $(button).removeClass('load-button');
                    sendAlertError('Algo ha salido mal, por favor revisa los campos o inténta de nuevo más tarde.'); 
                }
            }
        );
    });
});