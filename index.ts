import express from "express"; // Importa la librería Express para manejar el servidor web
import connectDB from "./src/config/database.js"; // Importa la función para conectar a la base de datos
import producRoutes from "./src/routes/product.routes.js"; // Importa las rutas de productos
import userRoutes from "./src/routes/user.routes.js"; // Importa las rutas de usuarios
import priceRoutes from "./src/routes/priceSpecial.routes.js"; // Importa las rutas de precios especiales
import cors from "cors"; // Importa CORS para permitir solicitudes desde diferentes orígenes

const app = express(); // Crea una instancia de la aplicación Express

// Conecta la aplicación a la base de datos
connectDB();

// Configura CORS para permitir solicitudes desde cualquier origen
app.use(
  cors({
    origin: "*", // Permite solicitudes desde cualquier origen
    methods: ["GET", "POST", "PUT", "DELETE"], // Permite métodos HTTP GET, POST, PUT, DELETE
    allowedHeaders: ["Content-Type", "Authorization"], // Permite los encabezados Content-Type y Authorization
  })
);

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Define el puerto en el que el servidor escuchará (por defecto, 3000)
const PORT = process.env.PORT || 3000;

// Rutas para productos, usuarios y precios especiales
app.use("/api/products", producRoutes); // Ruta para productos
app.use("/api/users", userRoutes); // Ruta para usuarios
app.use("/api/priceSpecial", priceRoutes); // Ruta para precios especiales

// Inicia el servidor y muestra un mensaje en consola
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
