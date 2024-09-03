import { Schema, model } from "mongoose";

// Subdocumento para las notas de cada alumno
const notaSchema = new Schema({
    alumnoId: {
        type: String,
        required: true
    },
    trimestre1: {
        type: Number,
        min: 0,
        max: 10,
        required: true
    },
    trimestre2: {
        type: Number,
        min: 0,
        max: 10,
        required: true
    },
    trimestre3: {
        type: Number,
        min: 0,
        max: 10,
        required: true
    },
    notaFinal: {
        type: Number,
        min: 0,
        max: 10,
        required: true
    }
});

// Esquema principal para la materia
const materiaSchema = new Schema({
    nombre: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required: true
    },
    anio: {
        type: String,
        required: true
    },
    division: {
        type: String,
        required: true
    },
    turno: {
        type: String,
        enum: ["Mañana", "Tarde", "Noche"], // Enum para asegurar que solo estos valores son aceptados
    },
    docenteId: {
        type: String,
        required: true
    },
    cursoId: {
        type: String,
    },
    notas: [notaSchema] // Array de subdocumentos de notas
});

const Materia = model("materia", materiaSchema);

export default Materia;
