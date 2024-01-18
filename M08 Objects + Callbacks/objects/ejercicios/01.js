const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
  console.log(propiedad);
  var miProp = propiedad.split('.');
  console.log(miProp);
};

const objeto = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Calle Falsa",
    numero: 123,
    ciudad: "Springfield",
  }
}

console.log(obtenerValorPropiedad(objeto, 'direccion.calle'));

module.exports = obtenerValorPropiedad;
