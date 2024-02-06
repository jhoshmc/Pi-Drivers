const axios = require("axios");
require("dotenv").config();
const server = require("./src/server");
const { conn } = require("./src/db.js");
const PORT = process.env.PORT;

//* descomentar depues , para la base de datos
// conn.sync({ force: true }).then(() => {
// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// })
// }).catch(error => console.error(error))

server.listen(PORT, () => {
  console.log(`listening port on ${PORT}`);
});
