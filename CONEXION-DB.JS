const { createConnection } = require("mysql2/promise");

async function main() {
  const conexionDB = await createConnection({
    host: "localhost",
    user: "root",
    
    password: "12345",
    database: "compras",
  });
  const resultado = await conexionDB.query("SELECT * FROM  mercaderia");
  console.log(resultado);
  conexionDB.end();
}
main();
