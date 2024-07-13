const {createConnection} = require("mysql2/promise");

const conexionDB =  createConnection({

    host:"localhost",
    user:"root",
    password:"12345",
    database: "compras"

    });
      
      console.log(conexionDB);
   
    
    
