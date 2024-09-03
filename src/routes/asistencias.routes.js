/* Este código JavaScript configura un enrutador utilizando el marco Express para una aplicación de
asistencias. Aquí hay un desglose de lo que hace cada parte: */
import { Router } from "express";
import {
    borrarAsistencia,
    crearAsistencia,
    editarAsistencia,
    obtenerAsistencia,
    obtenerAsistencias
} from "../controllers/asistencias.controllers";

const router = Router()


router.route("/asistencias")
    .get(obtenerAsistencias)
    .post(crearAsistencia)
router.route("/asistencias/:id")
    .get(obtenerAsistencia)
    .delete(borrarAsistencia)
    .put(editarAsistencia)

export default router