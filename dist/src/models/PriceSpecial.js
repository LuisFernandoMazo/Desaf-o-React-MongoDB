import { Schema, model } from "mongoose";
// Esquema de Mongoose para la colección 'preciosEspecialesMazo18'.
const priceSpecialSchema = new Schema({
    userId: { type: String, required: true },
    productId: { type: String, required: true },
    specialPrice: { type: Number, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    createAt: { type: String, required: true },
    updateLastAt: { type: String, required: true },
    status: { type: Boolean, required: true },
});
//Modelo 'PriceSpecial' basado en el esquema definido anteriormente.
export const PriceSpecial = model("PriceSpecial", priceSpecialSchema, "preciosEspecialesMazo18");
