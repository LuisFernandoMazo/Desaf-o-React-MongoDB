import { User } from "../models/User.js"; // Importa el modelo de Usuario

// Función para obtener todos los usuarios
export const getAllUsers = async () => {
  try {
    // Paginación de la consulta de usuarios, con un límite de resultados por página
    const users = await User.find();

    return users;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    throw new Error("No se pudieron obtener los usuarios");
  }
};

// Función para obtener un usuario por su documento de identificación
export const getUserByDocument = async (document: string) => {
  try {
    // Busca un usuario en la base de datos por su documento de identificación
    const user = await User.findOne({ identificacion: document }).lean();

    // Si no se encuentra el usuario, lanza un error
    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    return user;
  } catch (error: any) {
    console.error("Error al obtener el usuario:", error);
    throw new Error(error.message || "No se pudo obtener el usuario");
  }
};
