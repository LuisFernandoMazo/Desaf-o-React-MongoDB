import express from "express";
import { getUser, getUsers } from "../controllers/user.controller.js"; // Importa los controladores de usuarios
const router = express.Router(); // Crea una nueva instancia de Router de Express
// Ruta para obtener todos los usuarios
router.get("/getAllusers", getUsers);
// Ruta para obtener un usuario específico por su identificación (documento)
router.get("/getUserByDocument/:identificacion", getUser);
export default router; // Exporta el router para ser utilizado en otros archivos
