function probarCartaPapaNoel() {
    console.assert(validarNombre('') === 'este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );
  
    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'este campo debe ser menor a 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
    console.assert(
        validarCiudad('') ===
        'debes seleccionar algo',
        'ValidarCiudad no validó que el nombre no sea vacío',
    );
    console.assert(
        validarComportamiento('') ===
        'debes seleccionar algo',
        'ValidarComportamiento no validó que al menos un iten este seleccionado',
    );
    console.assert(
        validarDescripcionRegalo('') === 'este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );
  
    console.assert(
        validarDescripcionRegalo(
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') ===
        'este campo debe ser menor a 350 caracteres ',
        'Validar nombre no validó que el nombre sea menor a 350 caracteres',
    );
    
  }
 probarCartaPapaNoel();
  
  