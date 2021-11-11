import { DataTypes } from 'sequelize'

import db from '../db/connection'

const Tarea = db.define('Tarea',{
    nombre : {
        type : DataTypes.STRING
    },
    completada : {
        type : DataTypes.BOOLEAN
    }
})


export default Tarea;