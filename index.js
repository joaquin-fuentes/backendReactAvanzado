/* Este fragmento de código configura un servidor Express básico en un entorno Node.js. A continuación
se muestra un desglose de lo que hace cada parte del código: */
import express from "express"
import cors from "cors"
import morgan from "morgan"
import path from "path"
import * as dotenv from "dotenv"
import "./src/database/dbConnection"
import cursosRouter from "./src/routes/cursos.routes"
import usuariosRouter from "./src/routes/usuarios.routes"
import materiasRouter from "./src/routes/materias.routes"
import novedadesRouter from "./src/routes/novedades.routes"
import asistenciasRouter from "./src/routes/asistencias.routes"


//crear una instancia de express
const app = express()

//este si o si va antes del puerto
dotenv.config()//sirve para leer variables de entorno

//configurar un puerto
app.set("port", process.env.PORT || 4000)
const puerto = app.get("port")

app.listen(puerto, () => {
    console.log("Estoy en el puerto " + puerto)
})

//middlewares: funciones que ejecutan alguna tarea, generalmente antes de llegar a las rutas
app.use(cors()) //permite conexiones remotas
app.use(express.json())  //permite interpretar el formato JSON de una solicitud
app.use(express.urlencoded({ extended: true }))  //permite recibir en el objeto request los string y arrays
app.use(morgan("dev")) //nos da informacion extra en la terminal
app.use(express.static(path.join(__dirname, "/public")))

//rutas(siempre van al final)
// http://localhost:4000/api/cursos

app.use("/api", cursosRouter)
app.use("/api", usuariosRouter)
app.use("/api", materiasRouter)
app.use("/api", novedadesRouter)
app.use("/api", asistenciasRouter)

