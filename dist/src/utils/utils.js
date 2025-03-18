// Función para desformatear un valor con signo monetario a un número
export function desformatearPrecio(valorConSigno) {
    // Verifica si el valor proporcionado es vacío o inválido
    if (!valorConSigno) {
        console.error("El valor proporcionado es inválido o vacío.");
        return 0; // Devuelve 0 en caso de que el valor sea inválido o vacío
    }
    // Elimina cualquier carácter que no sea un número o punto decimal (ej. $, comas, etc.)
    let valorNumerico = valorConSigno.replace(/[^0-9.]/g, "");
    // Convierte el valor numérico extraído a un número de punto flotante
    let resultado = parseFloat(valorNumerico);
    // Si el resultado no es un número válido, devuelve 0
    if (isNaN(resultado)) {
        return 0;
    }
    // Devuelve el valor numérico desformateado
    return resultado;
}
