/**
 * El código anterior contiene funciones de controlador para manejar operaciones CRUD en asistencias en
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
import Asistencia from "../models/asistencia"

//Controlador para obtener asistencias

export const obtenerAsistencias = async (req, res) => {
    try {
        const asistencias = await Asistencia.find()
        res.status(200).json(asistencias)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar las asistencias de la base de datos"
        })
    }
}
//Controlador para obtener una sola asistencia

export const obtenerAsistencia = async (req, res) => {
    try {
        const { id } = req.params
        const asistencia = await Asistencia.findById(id)
        res.status(200).json(asistencia)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar la asistencia de la base de datos"
        })
    }
}

// Controlador para crear una asistencia

export const crearAsistencia = async (req, res) => {
    try {
        //trabajar con el resultado de la validacion de express-validator
        const errors = validationResult(req)
        // errors.isEmpty() // true: esta vacio, false: hay error
        if (!errors.isEmpty()) {
            return res.status(400).json({ errores: errors.array() })
        }
        const asistenciaNuevo = new Asistencia(req.body)
        await asistenciaNuevo.save()
        res.status(201).json({
            mensaje: "La asistencia fue creada correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al crear la asistencia"
        })
    }
}

// controlador para eliminar una asistencia

export const borrarAsistencia = async (req, res) => {
    try {
        //obtener el id y luego solicitar a moongoose el borrar   
        const { id } = req.params
        await Asistencia.findByIdAndDelete(id)
        res.status(200).json({
            mensaje: "asistencia eliminada"
        })
    }
    catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al eliminar asistencia"
        })
    }
}

// controlador para editar una asistencia

export const editarAsistencia = async (req, res) => {
    try {
        //obtener el id y luego solicitar a moongoose el editar   
        const { id } = req.params
        await Asistencia.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            mensaje: "asistencia actualizada correctamente"
        })
    }
    catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al editar asistencia"
        })
    }
}