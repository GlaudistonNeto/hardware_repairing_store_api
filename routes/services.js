const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/services');

// Services routes
router.post('/', servicesController.createService);
router.put('/:id', servicesController.updateService);
router.delete('/:id', servicesController.deleteService);
router.get('/', servicesController.getAllServices);
router.get('/:id', servicesController.getServiceById);

module.exports = router;
