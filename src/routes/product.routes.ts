import express from "express";
import {
  getAllProducts,
  getAllProductsByUser,
} from "../controllers/product.controller.js"; // Importa los controladores de productos

const router = express.Router(); // Crea una nueva instancia de Router de Express

// Ruta para obtener todos los productos de un usuario específico, usando su identificación
router.get("/getAllProducts/:identificacion", getAllProductsByUser);

// Ruta para obtener todos los productos sin filtrar por usuario
router.get("/getAllProducts", getAllProducts);

export default router; // Exporta el router para ser utilizado en otros archivos
