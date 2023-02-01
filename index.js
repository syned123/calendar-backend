const express = require("express");
const { dbConnection } = require("./databases/config");
require("dotenv").config();
const cors = require("cors");

//crear el servidor de express
const app = express();

//Base de datos
dbConnection();

//CORS
app.use(cors());

//directorio publico
app.use(express.static("public"));

//lectura y parseo del body
app.use(express.json());

//rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));
//escuchar petiiones
app.listen(4000, () => {
  console.log(`servidor corriendo en puerto ${4000}`);
});
