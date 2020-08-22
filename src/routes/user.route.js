const express = require('express');
const router = express.Router();

const controller = require('../controllers/user.controller');

router.get('/usuario', controller.list);
router.post('/usuario', controller.insert);
router.put('/usuario/:UsuUsuario', controller.update);
router.delete('/usuario/:UsuUsuario', controller.delete);

module.exports = router;
