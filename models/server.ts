import express , { Application } from 'express';
import cors from 'cors';

import tareaRoutes from '../routes/tarea.routes'
import db from '../db/connection';

class Server {
    
    private app: Application;
    private port : string ;
    private apiRuta = {
        tareas: '/api/tarea'
    }

    constructor(){
        this.app = express();        
        this.port = process.env.PORT || '8000';

        this.dbInit();
        this.middlewares();
        //definir rutas
        this.routes();
        
    }

    async   dbInit(){
        try {
             await db.authenticate();   
            console.log('conexion exitosa')

        } catch (error) {
            throw new Error("Ocurrio un error en la conexion" + error)
        }

    }    



    middlewares(){
        //condigurar cors
         this.app.use( cors( ));
        //parseo de body
        this.app.use( express.json());
        //carpeta de contenido estatico
        this.app.use( express.static('public') );
    }


    routes(){
        this.app.use( this.apiRuta.tareas , tareaRoutes )
    }

    listen(){
        this.app.listen( this.port , () => {
                console.log('Servido corrien en puerto --' + this.port)
        })

    }

}

export default Server;
