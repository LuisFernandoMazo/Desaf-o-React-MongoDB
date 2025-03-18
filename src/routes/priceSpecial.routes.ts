import express from "express";
import {
  allSpecialPrice,
  priceSpecial,
  updateSpecialPrice,
} from "../controllers/priceSpecial.controller.js"; // Importa los controladores de precios especiales

const router = express.Router(); // Crea una nueva instancia de Router de Express

// Ruta para agregar un nuevo precio especial
router.post("/addPriceSpecial", priceSpecial);

// Ruta para obtener todos los precios especiales
router.get("/getAllPriceSpecial", allSpecialPrice);

// Ruta para actualizar un precio especial por su ID
router.put("/updateSpecialPrice/:id", updateSpecialPrice);

export default router; // Exporta el router para ser utilizado en otros archivos
