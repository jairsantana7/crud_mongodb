const mongoose = require("mongoose");
const Carros = mongoose.model("Carros", {
  usuario_id: {
    type: mongoose.Types.ObjectId,
    ref: "Usuarios"
  },
  placa: {
    type: String,
    require: true
  },
  cor: {
    type: String,
    require: true
  },
  modelo: {
    type: String,
    require: true
  },
  fabricante: {
    type: String,
    require: true
  }
});

module.exports = Carros;
