import { Schema, model } from "mongoose";

const novedadSchema = new Schema({
    titulo: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required: true
    },
    url_img: {
        type: String,
        required: true,
        match: [/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/, "Please provide a valid image URL"] // Validación básica para URL de imágenes
    },
    destinatario: {
        type: String,
        enum: ["Docentes", "Alumnos", "Todos"], // Definir destinatarios permitidos
        required: true
    }
});

const Novedad = model("novedad", novedadSchema);

export default Novedad;
