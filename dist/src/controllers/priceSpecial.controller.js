import { addNewPriceSpecial, findIdAndUpdate, getAllEspecialPrice, } from "../services/priceSpecial.service.js"; // Importa las funciones del servicio para manejar precios especiales
import { desformatearPrecio } from "../utils/utils.js"; // Importa la función para desformatear el precio
// Controlador para agregar un nuevo precio especial
export const priceSpecial = async (req, res) => {
    // Extrae los datos del cuerpo de la solicitud
    const { userId, productId, specialPrice, startDate, endDate, status } = req.body;
    // Fecha de creación y última actualización
    const createAt = new Date().toISOString();
    const updateLastAt = new Date().toISOString();
    try {
        // Verifica que todos los campos necesarios estén presentes
        if (!userId || !productId || !specialPrice || !startDate || !endDate) {
            res.status(400).json({ message: "Todos los campos son obligatorios" });
            return;
        }
        // Función que valida el formato de la fecha
        const isValidDate = (date) => !isNaN(Date.parse(date));
        if (!isValidDate(startDate) || !isValidDate(endDate)) {
            res.status(400).json({ message: "Formato de fecha inválido" });
            return;
        }
        // Verifica que la fecha de inicio sea menor que la fecha de fin
        if (new Date(startDate) >= new Date(endDate)) {
            res.status(400).json({
                message: "La fecha de inicio debe ser menor que la fecha de finalización",
            });
            return;
        }
        // Verifica que las fechas no estén en el pasado
        const now = new Date();
        if (new Date(startDate) < now || new Date(endDate) < now) {
            res
                .status(400)
                .json({ message: "Las fechas no pueden estar en el pasado" });
            return;
        }
        // Llama al servicio para agregar el nuevo precio especial
        await addNewPriceSpecial({
            userId,
            productId,
            specialPrice: desformatearPrecio(specialPrice), // Convierte el precio a formato adecuado
            startDate,
            endDate,
            status: Boolean(status), // Convierte el estado a un valor booleano
            createAt,
            updateLastAt,
        });
        // Respuesta exitosa
        res.status(201).json({ message: "información guardada con exito" });
        return;
    }
    catch (error) {
        // Manejo de errores
        console.error("Error al guardar en la base de datos:", error);
        res.status(500).json({ message: "Error al guardar en la base de datos" });
        return;
    }
};
// Controlador para obtener todos los precios especiales
export const allSpecialPrice = async (req, res) => {
    try {
        // Llama al servicio para obtener todos los precios especiales
        const resp = await getAllEspecialPrice();
        res.status(200).send(resp); // Envía la respuesta con los precios especiales
    }
    catch (error) {
        // Manejo de errores
        console.error("Error: ", error);
        res
            .status(500)
            .json({ message: "Error al obtener los precios especiales" });
        return;
    }
};
// Controlador para actualizar un precio especial
export const updateSpecialPrice = async (req, res) => {
    const { id } = req.params; // Obtiene el ID del precio especial a actualizar desde los parámetros de la solicitud
    const updates = req.body; // Obtiene los datos de la actualización del cuerpo de la solicitud
    try {
        // Si se proporciona un nuevo precio especial, desformatearlo antes de guardarlo
        if (updates.specialPrice) {
            updates.specialPrice = desformatearPrecio(updates.specialPrice);
        }
        // Llama al servicio para actualizar el precio especial
        const resp = await findIdAndUpdate(id, updates);
        // Si no se encuentra el precio especial, retorna un error
        if (!resp)
            res.status(404).json({ message: "No encontrado" });
        // Responde con el precio especial actualizado
        res.status(200).send(resp);
    }
    catch (error) {
        // Manejo de errores
        console.error("Error: ", error);
        res.status(500).json({ message: "Error al actualizar" });
    }
};
