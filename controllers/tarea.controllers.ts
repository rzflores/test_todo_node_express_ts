import { Request , Response } from 'express'
import Tarea from '../models/tarea.model';


export  const getTareas  = async (req : Request, res : Response) => {
    const tareas = await Tarea.findAll();

    res.json({
        data: tareas
    })
}


export  const getTarea  = async (req : Request, res : Response) => {

    const { id } = req.params;
    const tarea  = await Tarea.findByPk(id);

    if( tarea){
        res.json({
            data: tarea
        })
    }else{
        res.status(404).json({ msg: "No existe tarea con id " + id })
    }


}

export  const postTarea  = async (req : Request, res : Response) => {


    const { body } = req;

    try {
        const tarea = await  Tarea.create(body);   
         tarea.save();     
        res.json({
            data: tarea            
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Error en el servidor" })
    }
}

export  const putTarea  =async (req : Request, res : Response) => {
    const { id } = req.params;
    const { body } = req;
    
  
    try {
        const tarea  = await Tarea.findByPk(id);
    
        if(!tarea){
            return  res.status(404).json({ msg: "No existe tarea con id " + id })
        }
        await tarea.update(body);

        res.json({
            data: tarea        
        })
    
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Error en el servidor" })
    }


    
}


export  const deleteTarea  =async (req : Request, res : Response) => {

    const { id } = req.params;

   
    try {
        const tarea  = await Tarea.findByPk(id);
    
        if(!tarea){
            return  res.status(404).json({ msg: "No existe tarea con id " + id })
        }
        await tarea.destroy();

        res.json({
            msg: `tarea con id ${id} eliminada`       
        })
    
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Error en el servidor" })
    }

}
