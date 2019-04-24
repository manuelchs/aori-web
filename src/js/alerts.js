function sendAlertSuccess(mensaje) {
    $('body').append('<div class="alert success"><p>' + mensaje + '<p><div onclick="closeAlert();" class="close-alert"></div></div>');
    setTimeout(function() {
        closeAlert();
    }, 6000);
}

function sendAlertError(mensaje) {
    $('body').append('<div class="alert error"><p>' + mensaje + '<p><div onclick="closeAlert();" class="close-alert"></div></div>');
    setTimeout(function() {
        closeAlert();
    }, 6000);
}

function closeAlert() {
    $('.alert').remove();
}