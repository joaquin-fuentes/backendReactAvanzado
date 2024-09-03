import { Schema, model } from "mongoose";

// Subdocumento para los horarios de cada curso
const horarioSchema = new Schema({
    dia: {
        type: String,
        enum: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
        required: true
    },
    modulo: {
        type: String,
        required: true
    },
    materiaID: {
        type: String,
        default: "" // Permitimos que pueda estar vacío
    }
});

// Subdocumento para el manejo de asistencias
const asistenciaSchema = new Schema({
    fecha: {
        type: Date, // Se usa Date para manejar fechas
        required: true
    },
    presentes: [{
        type: String, // IDs de los alumnos presentes
        required: true
    }],
    ausentes: [{
        type: String, // IDs de los alumnos ausentes
        required: true
    }]
});

// Esquema principal para el curso
const cursoSchema = new Schema({
    id: {
        type: String,  // ID del curso
        required: true,
        unique: true // Aseguramos que cada curso tenga un ID único
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
        required: true
    },
    materias: [{
        type: String,  // ID de las materias
        required: true
    }],
    horarios: [horarioSchema], // Array de subdocumentos de horarios
    alumnos: [{
        type: String, // ID de los alumnos
        required: true
    }],
    asistencias: [asistenciaSchema] // Array de subdocumentos de asistencias
});

const Curso = model("curso", cursoSchema);

export default Curso;
