import { Request, Response } from "express";
import { getAllUsers, getUserByDocument } from "../services/user.service.js"; // Importa los servicios que interactúan con la base de datos

// Controlador para obtener todos los usuarios
export const getUsers = async (req: Request, res: Response) => {
  try {
    // Llama al servicio para obtener todos los usuarios
    const users = await getAllUsers();

    // Si la solicitud es exitosa, responde con los usuarios encontrados
    res.status(200).json(users);
  } catch (error) {
    // Si ocurre un error al obtener los usuarios, responde con un mensaje de error
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Controlador para obtener un usuario específico por su documento de identificación
export const getUser = async (req: Request, res: Response) => {
  try {
    const { identificacion } = req.params;

    // Llama al servicio para obtener el usuario por su documento de identificación
    const user = await getUserByDocument(identificacion);

    // Si no se encuentra el usuario, responde con un error 404
    if (!user) {
      res.status(404).json({ error: "Usuario no existe" });
      return; // Si no se encuentra el usuario, termina la ejecución aquí
    }

    // Si el usuario es encontrado, responde con los datos del usuario
    res.status(200).send(user);
  } catch (error) {
    // Si ocurre un error, lanza un error con un mensaje genérico
    console.error("Error al obtener el usuario:", error);
    throw new Error("Error al obtener el usuario");
  }
};
