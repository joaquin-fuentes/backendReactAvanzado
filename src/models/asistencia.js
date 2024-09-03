import { Schema, model } from "mongoose";

// Esquema principal para la asistencia
const asistenciaSchema = new Schema({
    fecha: {
        type: Date, // Usamos Date para manejar fechas
        required: true
    },
    id: {
        type: String, // ID único para cada asistencia
        required: true,
        unique: true // Garantiza que el ID sea único
    },
    docentesPresentes: [{
        type: String, // Array de IDs de docentes presentes
        required: true
    }],
    docentesAusentes: [{
        type: String, // Array de IDs de docentes ausentes
        required: true
    }]
});

const Asistencia = model("asistencia", asistenciaSchema);

export default Asistencia;
