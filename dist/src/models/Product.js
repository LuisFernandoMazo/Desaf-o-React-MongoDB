import { Schema, model } from "mongoose";
// Esquema de Mongoose para los productos
const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    tags: { type: [], required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
});
// Modelo de Mongoose para la colección 'productos'
export const Product = model("Product", productSchema, "productos");
