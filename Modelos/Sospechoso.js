class Sospechoso {
    constructor(id,nombre, tipo, residencia,fechadescarga, culpabilidad, imagen, comentario) {
      this.id = id;
      this.nombre = nombre;
      this.tipo = tipo;
      this.residencia = residencia;
      this.fechadescarga=fechadescarga;
      this.culpabilidad = culpabilidad;
      this.imagen = imagen;
      this.comentario = comentario;
    }

// Getters
get nombre() {
    return this._nombre;
  }

get id(){
  return this._id;
}
  get tipo() {
    return this._tipo;
  }

  get residencia() {
    return this._residencia;
  }

  get fechadescarga() {
    return this._fechadescarga;
  }

  get culpabilidad() {
    return this._culpabilidad;
  }

  get imagen() {
    return this._imagen;
  }

  get comentario() {
    return this._comentario;
  }

  // Setters
  set nombre(newNombre) {
    this._nombre = newNombre;
  }

  set tipo(newTipo) {
    this._tipo = newTipo;
  }

  set residencia(newResidencia) {
    this._residencia = newResidencia;
  }

  set fechadescarga(newFechaDescarga) {
    this._fechadescarga = newFechaDescarga;
  }

  set culpabilidad(newCulpabilidad) {
    this._culpabilidad = newCulpabilidad;
  }

  set imagen(newImagen) {
    this._imagen = newImagen;
  }

  set comentario(newComentario) {
    this._comentario = newComentario;
  }
  set id(id) {
    this._id = id;
  }

  }