const express = require('express');
const router = express.Router();

const inventoryController = require('../controllers/inventoryController');

router.get('/', inventoryController.getItems);
router.get('/:id', inventoryController.getItemById);
router.post('/', inventoryController.addItem);
router.put('/:id', inventoryController.updateItem);

module.exports = router;