const express = require('express');
const router = express.Router();
const controller = require('../controllers/leitoresController');

router.post('/', controller.registerNewReader);
router.get('/', controller.getAllReaders);
router.put('/:id', controller.updateReader);
router.delete('/:id', controller.deleteReader);

module.exports = router;


