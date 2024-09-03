/* Este código JavaScript configura un enrutador utilizando el marco Express para una aplicación de
cursos. Aquí hay un desglose de lo que hace cada parte: */
import { Router } from "express";
import {
    borrarCurso,
    crearCurso,
    editarCurso,
    obtenerCurso,
    obtenerCursos
} from "../controllers/cursos.controllers";

const router = Router()


router.route("/cursos")
    .get(obtenerCursos)
    .post(crearCurso)
router.route("/cursos/:id")
    .get(obtenerCurso)
    .delete(borrarCurso)
    .put(editarCurso)

export default router