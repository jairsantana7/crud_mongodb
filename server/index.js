const { json } = require("express");
const express = require("express");

require("../database");

const port = 8080;
const app = express();

app.use(express.json());
//app.use("/usuario", require("../src/routes/usuario.routes"));
app.use("/usuario", require("../src/routes/usuario.routes"));

app.use("/carro", require("../src/routes/carro.routes"));

// app.get("/", (require, response) => {
//   response.send("hallo");
// });

app.listen(port, () => {
  console.log(`Server runing in port: ${port}`);
});

