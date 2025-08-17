const { Schema, model } = require("mongoose");

const EventoSchema = Schema({
  title: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    // required: true
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true
  }
});
EventoSchema.method("toJSON", function () {
  const { __v, _id, ...evento } = this.toObject();
  evento.id = _id;
  return evento;
});

module.exports = model("Evento", EventoSchema);