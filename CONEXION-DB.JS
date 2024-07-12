const { createConnection, createServer } = require("mysql2/promise");
async function main() {
  const conexionDB = await crearConexion();

  const respuesta = await conexionDB.query("SELECT * FROM mercaderia");
  console.log(respuesta[0][0].precio );
  conexionDB.end();
}
main();

async function crearConexion() {
  return await createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "compras"
  });
}
