function validarFechaCampo(fechaDescarga) {
      
    const fechaCampo = new Date(fechaDescarga.value);
    const fechaActual = new Date();

    if (fechaCampo > fechaActual) {
      return false;
    } else {
      return true;
    }
  }

  function anadirSospechoso(nuevoSospechoso) {
    let listaSospechosos = [];

    const listaSospechososJSON = localStorage.getItem('sospechosos');
    if (listaSospechososJSON) {
      listaSospechosos = JSON.parse(listaSospechososJSON);
    }
      
    if (nuevoSospechoso._id > 0) {
      console.log(nuevoSospechoso._id > 0);
     
      listaSospechosos.forEach(sospechoso =>{
      
        if (sospechoso._id == nuevoSospechoso._id) {
         
          listaSospechosos[nuevoSospechoso._id-1] = nuevoSospechoso;
         
        }
      });
    } else {
      
      numero = listaSospechosos.length;
      nuevoSospechoso._id = numero+1;
      listaSospechosos.push(nuevoSospechoso);
     
    }

    const nuevaListaSospechososJSON = JSON.stringify(listaSospechosos);
    localStorage.setItem('sospechosos', nuevaListaSospechososJSON);
  }