/*
  Rutas para eventos
  /api/events
*/
const { Router } = require("express");
const { check } = require("express-validator");
const { isDate } = require('../helpers/isDate');
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento
} = require("../controllers/events");

const router = Router();
// Deben pasar por el middleware de autenticación
router.use(validarJWT);

// Obtener eventos
router.get("/", getEventos);

// Crear evento
router.post('/', [
  check('title', 'El título es obligatorio').not().isEmpty(),
  check('start', 'La fecha de inicio es obligatoria').custom(isDate),
  check('end', 'La fecha de fin es obligatoria').custom(isDate),
  validarCampos
], crearEvento);

// Actualizar evento
router.put('/:id', [
  check('title', 'El título es obligatorio').not().isEmpty(),
  check('start', 'La fecha de inicio es obligatoria').custom(isDate),
  check('end', 'La fecha de fin es obligatoria').custom(isDate),
  validarCampos
], actualizarEvento);

// Eliminar evento
router.delete('/:id', eliminarEvento);

module.exports = router;
