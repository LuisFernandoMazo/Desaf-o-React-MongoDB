// Importa el paquete dotenv para cargar las variables de entorno del archivo .env
import dotenv from "dotenv";
// Importa mongoose para interactuar con la base de datos MongoDB
import mongoose from "mongoose";

// Carga las variables de entorno desde el archivo .env
dotenv.config();

// Obtiene la URL de conexión a la base de datos MongoDB desde las variables de entorno
// 'process.env.MONGODB_URI' contiene la cadena de conexión configurada en el archivo .env
const mongoURI = process.env.MONGODB_URI as string; // Usamos 'as string' para asegurar el tipo de la variable

// Función asíncrona para conectarse a la base de datos MongoDB
const connectDB = async () => {
  try {
    // Intenta conectar a MongoDB usando la URL de conexión
    await mongoose.connect(mongoURI);
    console.log("Conectado a la base de datos MongoDB"); // Si la conexión es exitosa, muestra un mensaje
  } catch (error) {
    // Si ocurre un error al intentar conectar, muestra un mensaje de error y detiene el proceso
    console.error("Error al conectar mongoDB", error);
    process.exit(1); // Finaliza el proceso con un código de salida 1 (indicando error)
  }
};

// Exporta la función 'connectDB' para que pueda ser utilizada en otros archivos
export default connectDB;
