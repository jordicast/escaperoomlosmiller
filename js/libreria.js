function comprobar(valor, correcto, redirect) {
    var arrCorrecto = correcto.split(";");
    var control = false;

    $.each(arrCorrecto, function(key, value) {

        if ($.trim(valor.toLowerCase()) == value) {
            location.href = redirect;
            control = true
            return;
        }
    });

    if (control == false) {
        $("#comprobarModal").modal('show');
    }
}

function toggler(divId) {
    $("#" + divId).toggle();
    $("#" + divId + "BIS").toggle();
}