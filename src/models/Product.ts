import { Schema, model } from "mongoose";

// Interfaz que define la estructura de un producto.
interface IProduct {
  name: string;
  price: number;
  category: string;
  stock: string;
  description: string;
  brand: string;
  sku: string;
  tags: [];
  createdAt: string;
  updatedAt: string;
}

// Esquema de Mongoose para los productos
const productSchema = new Schema<IProduct>({
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
export const Product = model<IProduct>("Product", productSchema, "productos");
