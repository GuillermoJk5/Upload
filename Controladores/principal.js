   // Función para mostrar la imagen a pantalla completa
   document.getElementById('mostrarImagen').addEventListener('click', function() {
    document.getElementById('imagenFullscreen').style.display = 'block';
  });

  // Función para ocultar la imagen al hacer clic en ella
  document.getElementById('imagenFullscreen').addEventListener('click', function() {
    this.style.display = 'none';
  });
