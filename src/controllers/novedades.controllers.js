/**
 * El código anterior contiene funciones de controlador para manejar operaciones CRUD en novedades en
 * una aplicación Node.js usando Express y Mongoose.
 * @param req - El parámetro `req` en su código representa el objeto de solicitud en Express.js.
 * Contiene información sobre la solicitud HTTP, como los encabezados de la solicitud, los parámetros,
 * el cuerpo, los parámetros de consulta, etc.
 * @param res - El parámetro `res` en los fragmentos de código que proporcionó representa el objeto de
 * respuesta en Express.js. Se utiliza para enviar una respuesta al cliente que realiza la solicitud
 * HTTP. El objeto de respuesta (`res`) tiene métodos como `res.status()` para establecer el código de
 * estado HTTP de la respuesta, `
 */
import { validationResult } from "express-validator"
import Novedad from "../models/novedad"

//Controlador para obtener novedades

export const obtenerNovedades = async (req, res) => {
    try {
        const novedades = await Novedad.find()
        res.status(200).json(novedades)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar las novedades de la base de datos"
        })
    }
}
//Controlador para obtener una sola novedad

export const obtenerNovedad = async (req, res) => {
    try {
        const { id } = req.params
        const novedad = await Novedad.findById(id)
        res.status(200).json(novedad)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            novedad: "Error al buscar el novedad de la base de datos"
        })
    }
}

// Controlador para crear un novedad

export const crearNovedad = async (req, res) => {
    try {
        //trabajar con el resultado de la validacion de express-validator
        const errors = validationResult(req)
        // errors.isEmpty() // true: esta vacio, false: hay error
        if (!errors.isEmpty()) {
            return res.status(400).json({ errores: errors.array() })
        }
        const novedadNuevo = new Novedad(req.body)
        await novedadNuevo.save()
        res.status(201).json({
            novedad: "La novedad fue creada correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al crear la novedad"
        })
    }
}

// controlador para eliminar un novedad

export const borrarNovedad = async (req, res) => {
    try {
        //obtener el id y luego solicitar a moongoose el borrar   
        const { id } = req.params
        await Novedad.findByIdAndDelete(id)
        res.status(200).json({
            mensaje: "Novedad eliminada"
        })
    }
    catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al eliminar novedad"
        })
    }
}

// controlador para editar un novedad

export const editarNovedad = async (req, res) => {
    try {
        //obtener el id y luego solicitar a moongoose el editar   
        const { id } = req.params
        await Novedad.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            mensaje: "Novedad actualizada correctamente"
        })
    }
    catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al editar novedad"
        })
    }
}