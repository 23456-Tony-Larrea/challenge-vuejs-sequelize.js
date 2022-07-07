const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('prueba', 'postgres', '123456', {
    host: 'localhost',
    dialect:'postgres'
  });

  (async () =>{
  try {
   await sequelize.authenticate();
    console.log("Connection has been established successfully.");
   } catch (error) {
    console.error("Unable to connect to the database:", error);
   }
   await sequelize.sync({force:true});
      })();

 
module.exports =sequelize;