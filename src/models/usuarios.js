const mongoose = require("mongoose");
const Usuarios = mongoose.model("Usuarios", {
  nome: {
    type: String,
    require: true
  },
  email: String,
  senha: {
    type: String,
    require: function () {
      return this.idade > 18;
    }
  },
  cor_olhos: {
    type: String,
    anum: ["azul", "castanho", "verde"],
    require: true
  },
  idade: Number,
  status: Boolean,
  habilidade: Array,
  outros: Object // caracteriscas pessoais
});

module.exports = Usuarios;
