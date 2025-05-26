// Función para calcular el promedio de un array de números enteros positivos
const funciones = {
  calcularPromedio: function(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
      throw new Error('El argumento debe ser un array no vacío');
    }

    const suma = numeros.reduce((acc, num) => acc + num, 0);
    return suma / numeros.length;
  }
};

export default funciones;
