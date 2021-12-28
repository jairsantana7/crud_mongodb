const exppress = require("express");

const route = exppress.Router();

const Carro = require("../models/carros");

route.post("/", async (request, response) => {
  try {
    const carro = await new Carro(request.body).save();

    //retornara carrro
    response.json({ error: false, carro });
  } catch (error) {
    response.json({ error: true, message: error.message });
  }
});

route.get("/", async (request, response) => {
  try {
    const carro = await Carro.find({ cor: "prata" });

    //retornara carrro
    response.json({ error: false, carro });
  } catch (error) {
    response.json({ error: true, message: error.message });
  }
});

route.get("/:id", async (request, response) => {
  try {
    const carro = await Carro.findById(request.params.id).populate(
      "usuario_id"
    );

    //retornara carrro
    response.json({ error: false, carro });
  } catch (error) {
    response.json({ error: true, message: error.message });
  }
});

route.put("/:id", async (request, response) => {
  try {
    const carro = await Carro.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    );

    //retornara carro atualizado
    response.json({ error: false, carro });
  } catch (error) {
    response.json({ error: true, message: error.message });
  }
});

module.exports = route;
