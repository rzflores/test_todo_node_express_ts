import { Sequelize } from 'sequelize'


const db  = new Sequelize('tareasdb','root','Abc1234$' , {
    host:'localhost',
    dialect: 'mysql',
    logging:false
});


export default db;