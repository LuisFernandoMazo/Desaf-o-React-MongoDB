# Proyecto: Desafío React / MongoDB

## Introducción

Este es un proyecto completo que incluye una aplicación web para gestionar productos y precios especiales asociados a usuarios. Está dividido en dos secciones principales: **Backend** (Node.js) y **Frontend** (React). A continuación, se explican los pasos para ejecutar y desarrollar ambas partes del proyecto.

La aplicación permite gestionar productos y asignar precios especiales a usuarios. Los precios de los productos pueden ajustarse según los usuarios que tienen precios especiales.

---

## Backend (Node.js)

### Pasos para ejecutar localmente

1. **Instalar dependencias**:
   npm install

2. **Configuración de variables de entorno**
   Crear un archivo .env en la raíz del proyecto con las siguientes variables:
   -**MONGODB_URI**= mongodb+srv://drenviochallenge:m1jWly3uw42cBwp6@drenviochallenge.2efc0.mongodb.net/tienda
   -**PORT**=3000

3. **Compilar el código TypeScript:**
   npm run build

4. **Ejecutar el backend:**
   npm run dev
   Esto iniciará el servidor en http://localhost:3000.

### Tecnologías Utilizadas

- **Node.js**: Se utilizó Node.js para construir el servidor backend debido a su capacidad para manejar un gran número de conexiones concurrentes y su eficiencia en aplicaciones de red.
- **TypeScript**: TypeScript fue elegido para este proyecto debido a sus ventajas de tipado estático, que proporcionan seguridad y ayudan a evitar errores comunes que pueden surgir al usar JavaScript puro. El tipado de TypeScript permite detectar errores durante el desarrollo, lo que facilita la depuración y mejora la mantenibilidad del código.
- **Mongoose**: Mongoose se utiliza para interactuar con MongoDB de manera eficiente, aprovechando su modelo de datos flexible y su capacidad para manejar relaciones entre datos.
- **Express**: Se eligió Express debido a su simplicidad y robustez para crear aplicaciones RESTful en Node.js, permitiendo una rápida configuración de rutas y middleware.
- **CORS**: Se utiliza el middleware CORS para permitir solicitudes entre diferentes orígenes y habilitar la comunicación entre el frontend y el backend, asegurando que la aplicación pueda hacer peticiones de manera segura.

### Descripción de la estructura del Proyecto

Se implementó la **arquitectura Clean Code** utilizando el patrón **MVC (Modelo-Vista-Controlador)** para garantizar un código modular, escalable y fácil de mantener. Este enfoque ayuda a separar las responsabilidades en el código y asegura que el proyecto sea más limpio y fácil de seguir.

- **Modelo (Model)**: Define la estructura de los datos que serán almacenados en la base de datos. En este proyecto, se utilizan modelos de Mongoose como `Product`, `PriceSpecial`, y `User`.
- **Vista (View)**: Aunque no se implementa en el backend directamente, la vista se refiere a la representación de los datos que se muestran al usuario, es gestionada en el frontend.
- **Controlador (Controller)**: Contiene la lógica de negocio y maneja las solicitudes entrantes, interactúa con los modelos, y devuelve las respuestas correspondientes.

-**config/database.ts:** Establece la conexión con la base de datos MongoDB.
-**controllers/:** Contiene la lógica para manejar las solicitudes de los productos, precios especiales y usuarios.
-**models/:** Define los esquemas de Mongoose para los modelos PriceSpecial, Product, y User.
-**routes/:** Contiene las rutas para las operaciones CRUD de productos, precios especiales y usuarios.
-**services/:** Contiene la lógica de negocio para interactuar con la base de datos y procesar los datos.
-**utils/:** Funciones auxiliares como validaciones y utilidades.
-**index.ts:** El punto de entrada del servidor Express que inicia la API.

## Endpoints de la API

GET : /api/users/getUserByDocument/:identificacion
GET : /api/users/getAllusers
GET : /api/products/getAllProducts
GET : /api/users/getAllusers
GET : /api/products/getAllProducts
GET : /api/priceSpecial/getAllPriceSpecial
PUT : /api/priceSpecial/updateSpecialPrice/:id
POST: /api/priceSpecial/addPriceSpecial
