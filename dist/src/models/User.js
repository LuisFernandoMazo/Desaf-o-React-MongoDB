import { Schema, model } from "mongoose";
// Esquema de Mongoose para los usuarios
const userSchema = new Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    identificacion: { type: String, required: true },
    role: { type: String, required: true },
    status: { type: String, required: true },
});
// Modelo de Mongoose para la colección 'usuariosMazo18'
export const User = model("User", userSchema, "usuariosMazo18");
