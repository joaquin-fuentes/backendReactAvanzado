/* Este código JavaScript configura un enrutador utilizando el marco Express para una aplicación de
novedades. Aquí hay un desglose de lo que hace cada parte: */
import { Router } from "express";
import {
    borrarNovedad,
    crearNovedad,
    editarNovedad,
    obtenerNovedad,
    obtenerNovedades
} from "../controllers/novedades.controllers";

const router = Router()


router.route("/novedades")
    .get(obtenerNovedades)
    .post(crearNovedad)
router.route("/novedades/:id")
    .get(obtenerNovedad)
    .delete(borrarNovedad)
    .put(editarNovedad)

export default router