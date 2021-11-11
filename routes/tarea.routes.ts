import { Router }  from 'express'
import { deleteTarea, getTarea, getTareas, postTarea, putTarea } from '../controllers/tarea.controllers';

const router = Router();

router.get('/' , getTareas);
router.get('/:id' , getTarea);
router.post('/' , postTarea);
router.put('/:id' , putTarea);
router.delete('/:id' , deleteTarea);



export default router;