import { IPriceSpecial, PriceSpecial } from "./../models/PriceSpecial.js";

// Función para encontrar los precios especiales de un usuario por su ID
export const findByUserId = async (id: string) => {
  try {
    // Busca los precios especiales en la base de datos para un usuario específico
    const resp = await PriceSpecial.find({
      userId: id, // Filtra por el ID del usuario
    });

    return resp; // Devuelve los precios especiales encontrados
  } catch (error) {
    // Si ocurre un error, lo registra en la consola
    console.error(error);
  }
};

// Función para agregar un nuevo precio especial
export const addNewPriceSpecial = async ({
  userId,
  productId,
  specialPrice,
  startDate,
  endDate,
  createAt,
  updateLastAt,
  status,
}: IPriceSpecial) => {
  try {
    // Crea un nuevo documento de precio especial
    const newPriceSpecial = new PriceSpecial({
      userId,
      productId,
      specialPrice,
      startDate,
      endDate,
      createAt,
      updateLastAt,
      status,
    });

    // Guarda el nuevo precio especial en la base de datos
    await newPriceSpecial.save();
  } catch (error: any) {
    // Si ocurre un error en MongoDB, lo registra y lanza un error
    console.error("Error en MongoDB:", error);
    throw new Error(
      error.message || "Error desconocido al guardar la información"
    );
  }
};

// Función para obtener todos los precios especiales
export const getAllEspecialPrice = async () => {
  try {
    // Obtiene todos los precios especiales de la base de datos
    const resp = await PriceSpecial.find();
    return resp; // Devuelve todos los precios especiales encontrados
  } catch (error: any) {
    // Si ocurre un error en MongoDB, lo registra y lanza un error
    console.error("Error en MongoDB:", error);
    throw new Error(
      error.message || "Error desconocido al guardar la información"
    );
  }
};

// Función para buscar un precio especial por ID y actualizarlo
export const findIdAndUpdate = async (id: string, updates: []) => {
  try {
    // Busca y actualiza el precio especial por su ID
    const resp = await PriceSpecial.findByIdAndUpdate(id, updates, {
      new: true, // Devuelve el documento actualizado
    });
    return resp; // Devuelve el precio especial actualizado
  } catch (error: any) {
    // Si ocurre un error en MongoDB, lo registra y lanza un error
    console.error("Error en MongoDB:", error);
    throw new Error(
      error.message || "Error desconocido al guardar la información"
    );
  }
};
