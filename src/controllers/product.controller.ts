import { Request, Response } from "express";
import {
  findAllProducts,
  findByIdentificacionAnduserId,
} from "../services/product.service.js"; // Servicios que interactúan con la base de datos

// Controlador para obtener todos los productos de un usuario específico basado en su identificación
export const getAllProductsByUser = async (req: Request, res: Response) => {
  try {
    const { identificacion } = req.params;

    // Llama al servicio que obtiene los productos relacionados con la identificación y el ID del usuario
    const allProducts = await findByIdentificacionAnduserId(identificacion);

    // Si la solicitud es exitosa, se responde con los productos encontrados
    res.status(200).json(allProducts);
  } catch (error) {
    // Si ocurre un error, se responde con un mensaje de error y el código de estado 500 (Error interno del servidor)
    res.status(500).json({ message: "Error interno del servidor" });
    // Se lanza un error para ser manejado más arriba si es necesario
    throw new Error("Error al buscar el usuario");
  }
};

// Controlador para obtener todos los productos sin ningún filtro
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const resp = await findAllProducts();

    // Si la solicitud es exitosa, se responde con la lista de productos
    res.status(200).send(resp);
  } catch (error) {
    // Si ocurre un error, se responde con un mensaje de error y el código de estado 500 (Error interno del servidor)
    res.status(500).json({ message: "Error interno del servidor" });
    // Se lanza un error para ser manejado más arriba si es necesario
    throw new Error("Error al buscar los productos");
  }
};
