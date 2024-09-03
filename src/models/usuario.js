/* Este fragmento de código define un esquema Mongoose para un usuario (usuario) en una base de datos
MongoDB. A continuación se muestra un desglose de lo que hace cada parte del código: */
import { Schema, model } from "mongoose"

const usuarioSchema = new Schema({
    apellido: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true
    },
    nombre: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true
    },
    dni: {
        type: String,
        minLength: 7,  // Asumiendo que el DNI tiene al menos 7 caracteres
        maxLength: 8,  // Máximo para un DNI típico en Argentina
        unique: true,
        required: true
    },
    rol: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true
    },
    telefono: {
        type: String,
        minLength: 10, // Asumiendo que el teléfono tiene un mínimo de 10 caracteres
        maxLength: 15,
        required: true
    },
    direccion: {
        type: String,
        minLength: 5,
        maxLength: 100,
        required: true
    },
    email: {
        type: String,
        minLength: 5,
        maxLength: 100,
        unique: true,
        required: true,
        match: [/.+\@.+\..+/, "Please fill a valid email address"] // Validación de formato de email
    },
    //para usar expresiones regulares se usa la propiedad "match"
    password: {
        type: String,
        required: true
    }
})

const Usuario = model("usuario", usuarioSchema)

export default Usuario