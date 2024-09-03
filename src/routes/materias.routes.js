/* Este código JavaScript configura un enrutador utilizando el marco Express para una aplicación de
materias. Aquí hay un desglose de lo que hace cada parte: */
import { Router } from "express";
import {
    borrarMateria,
    crearMateria,
    editarMateria,
    obtenerMateria,
    obtenerMaterias
} from "../controllers/materias.controllers";

const router = Router()


router.route("/materias")
    .get(obtenerMaterias)
    .post(crearMateria)
router.route("/materias/:id")
    .get(obtenerMateria)
    .delete(borrarMateria)
    .put(editarMateria)

export default router