
import Sospechoso from "../Modelos/Sospechoso.js";

document.getElementById('sospechosoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombreInput').value;
    const tipo = document.getElementById('tipoInput').value;
    const residencia = document.getElementById('residenciaInput').value;
    const fechaDescarga = document.getElementById('fechaDescargaInput').value;
    const culpabilidad = document.getElementById('culpabilidadInput').value;
    const imagen = document.getElementById('imagenInput').value;
    const comentario = document.getElementById('comentarioInput').value;

    const nuevoSospechoso = new Sospechoso(nombre, tipo, residencia, fechaDescarga, culpabilidad, imagen, comentario);

    console.log(nuevoSospechoso);
  });