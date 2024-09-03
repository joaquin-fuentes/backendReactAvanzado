/**
 * El código anterior contiene funciones de controlador para manejar operaciones CRUD en materias en
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
import Materia from "../models/materia"

//Controlador para obtener materias

export const obtenerMaterias = async (req, res) => {
    try {
        const materias = await Materia.find()
        res.status(200).json(materias)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar las materias de la base de datos"
        })
    }
}
//Controlador para obtener una sola materia

export const obtenerMateria = async (req, res) => {
    try {
        const { id } = req.params
        const materia = await Materia.findById(id)
        res.status(200).json(materia)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar la materia de la base de datos"
        })
    }
}

// Controlador para crear una materia

export const crearMateria = async (req, res) => {
    try {
        //trabajar con el resultado de la validacion de express-validator
        const errors = validationResult(req)
        // errors.isEmpty() // true: esta vacio, false: hay error
        if (!errors.isEmpty()) {
            return res.status(400).json({ errores: errors.array() })
        }
        const materiaNuevo = new Materia(req.body)
        await materiaNuevo.save()
        res.status(201).json({
            mensaje: "La materia fue creada correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al crear la materia"
        })
    }
}

// controlador para eliminar una materia

export const borrarMateria = async (req, res) => {
    try {
        //obtener el id y luego solicitar a moongoose el borrar   
        const { id } = req.params
        await Materia.findByIdAndDelete(id)
        res.status(200).json({
            mensaje: "materia eliminada"
        })
    }
    catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al eliminar materia"
        })
    }
}

// controlador para editar una materia

export const editarMateria = async (req, res) => {
    try {
        //obtener el id y luego solicitar a moongoose el editar   
        const { id } = req.params
        await Materia.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            mensaje: "materia actualizada correctamente"
        })
    }
    catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al editar materia"
        })
    }
}