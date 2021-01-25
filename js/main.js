const $form = document.querySelector("#carta-a-santa");
let nombre = $form.nombre.value;
console.log(nombre);
let ciudad= $form.ciudad.value;
let comportamiento= $form.comportamiento.value;
let descripcionRegalo= $form["descripcion-regalo"].value;
let boton= $form["enviar-carta"];
console.log(boton);


function validarNombre(nombre){

    if(nombre.length === 0 ){
        return "este campo debe tener al menos 1 caracter";
    }
    if(nombre.length >= 50){
        return "este campo debe ser menor a 50 caracteres";
    }
    else {
        return "";
    }
}
validarNombre(nombre);
function validarCiudad(ciudad){
    if (ciudad === ""){
        return "debes seleccionar algo";
    }
    return "";
}


function validarComportamiento(comportamiento){
    if (comportamiento === ""){
        return "debes seleccionar algo";
    }
    return "";
}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length === 0 ){
        return "este campo debe tener al menos 1 caracter";
    }
    if(descripcionRegalo.length >= 350){
        return "este campo debe ser menor a 350 caracteres ";
    }
    return "";
}