/* 
    Events Routes
    /api/events
*/
const { Router } = require("express");
const { check } = require("express-validator");
const {
  getEventos,
  crearEventos,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/validar-campos");
const router = Router();
const { validarJWT } = require("../middlewares/validar-jwt");

router.use(validarJWT);
//obtener eventos
router.get("/", getEventos);
router.post(
  "/",
  [
    check("title", "el titulo es obligatorio").not().isEmpty(),
    check("start", "fecha de inicio").custom(isDate),
    check("end", "fecha de final").custom(isDate),
    validarCampos,
  ],

  crearEventos
);
router.put("/:id", actualizarEvento);
router.delete("/:id", eliminarEvento);

module.exports = router;
