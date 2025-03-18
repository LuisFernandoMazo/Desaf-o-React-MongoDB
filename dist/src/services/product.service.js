import { Product } from "../models/Product.js"; // Importa el modelo de Producto
import { User } from "../models/User.js"; // Importa el modelo de Usuario
import { findByUserId } from "./priceSpecial.service.js"; // Importa la función para encontrar precios especiales de un usuario
// Función para obtener los productos de un usuario y aplicar los precios especiales si existen
export const findByIdentificacionAnduserId = async (identificacion) => {
    try {
        // Busca al usuario por su identificación
        const resp = await User.findOne({ identificacion });
        // Si el usuario no existe, devuelve un mensaje
        if (!resp?._id)
            return "usuario no existe";
        // Llama a la función para obtener los precios especiales del usuario
        const userExist = await findByUserId(resp?._id.toString());
        // Obtiene todos los productos de la base de datos
        const listProduct = await findAllProducts();
        // Actualiza los precios de los productos según los precios especiales del usuario
        const updateProducts = listProduct?.map((product) => {
            // Encuentra el precio especial correspondiente al producto
            const newPrice = userExist?.find((user) => user.productId === product._id.toString());
            // Si existe un precio especial activo, lo aplica
            return {
                ...product.toObject(),
                price: newPrice && newPrice.status ? newPrice.specialPrice : product.price,
            };
        });
        return updateProducts; // Devuelve los productos con los precios actualizados
    }
    catch (error) {
        console.error(error); // Registra el error si ocurre
    }
};
// Función para obtener todos los productos
export const findAllProducts = async () => {
    try {
        // Obtiene todos los productos desde la base de datos
        const resp = await Product.find();
        return resp; // Devuelve los productos
    }
    catch (error) {
        console.error(error); // Registra el error si ocurre
    }
};
