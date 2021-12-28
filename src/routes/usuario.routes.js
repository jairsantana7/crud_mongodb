const exppress = require("express");

const route = exppress.Router();
const Usuario = require("../models/usuarios");

route.post("/", async (request, response) => {
  try {
    const usuario = await new Usuario(request.body).save();

    //retornara carrro
    response.json({ error: false, usuario });
  } catch (error) {
    response.json({ error: true, message: error.message });
  }
});

module.exports = route;
