/**
 * El código anterior contiene controladores para la autenticación de cursos, la recuperación de
 * cursos, la creación de cursos, la eliminación de cursos y la edición de cursos en una
 * aplicación Node.js que utiliza MongoDB.
 * @param req - El parámetro `req` en su código representa el objeto de solicitud en Express.js.
 * Contiene información sobre la solicitud HTTP que activó la función, como los encabezados, el cuerpo,
 * los parámetros y más de la solicitud.
 * @param res - El parámetro `res` en su código representa el objeto de respuesta en Express.js. Se
 * utiliza para enviar una respuesta al cliente que realiza la solicitud. Puede utilizar métodos como
 * `res.status()` para establecer el código de estado HTTP de la respuesta, `res.json()` para enviar
 * una respuesta JSON,
 * @returns El código proporcionado incluye varias funciones de controlador para la autenticación y
 * administración de cursos en una aplicación Node.js usando Express y Mongoose. A continuación se
 * muestra un resumen de las funciones:
 */
// import generarJWT from "../helpers/token-sign";
import Curso from "../models/curso"



//Controlador para obtener cursos

export const obtenerCursos = async (req, res) => {
    try {
        const cursos = await Curso.find()
        res.status(200).json(cursos)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar los cursos de la base de datos"
        })
    }
}

//Controlador para obtener un solo curso

export const obtenerCurso = async (req, res) => {
    try {
        const { id } = req.params
        const curso = await Curso.findById(id)
        res.status(200).json(curso)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar el curso de la base de datos"
        })
    }
}

// Controlador para crear un curso

export const crearCurso = async (req, res) => {
    try {
        const cursoNuevo = new Curso(req.body)
        await cursoNuevo.save()
        res.status(201).json({
            mensaje: "El curso fue creado correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al crear el curso"
        })
    }
}


// controlador para eliminar un curso

export const borrarCurso = async (req, res) => {
    try {
        //obtener el id y luego solicitar a moongoose el borrar   
        const { id } = req.params
        await Curso.findByIdAndDelete(id)
        res.status(200).json({
            mensaje: "EL curso fue eliminado"
        })
    }
    catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al eliminar el curso"
        })
    }
}

// controlador para editar un curso

export const editarCurso = async (req, res) => {
    try {
        //obtener el id y luego solicitar a moongoose el editar   
        const { id } = req.params
        await Curso.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            mensaje: "El curso fue actualizado correctamente"
        })
    }
    catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al editar el usaurio"
        })
    }
}