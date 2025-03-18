import { Schema, model } from "mongoose";

// Interfaz que define la estructura de un usuario.
interface IUSer {
  nombre: string;
  email: string;
  identificacion: string;
  role: string;
  status: string;
}
// Esquema de Mongoose para los usuarios
const userSchema = new Schema<IUSer>({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  identificacion: { type: String, required: true },
  role: { type: String, required: true },
  status: { type: String, required: true },
});
// Modelo de Mongoose para la colección 'usuariosMazo18'
export const User = model<IUSer>("User", userSchema, "usuariosMazo18");
