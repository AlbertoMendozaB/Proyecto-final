const express = require('express');
const router = express.Router();
const specializationConstroller = require('../controllers/specialization.controller');

router
    .get('/', specializationConstroller.get)
    .get('/:id', specializationConstroller.getById)
    .post('/', specializationConstroller.create)
    .put('/:id', specializationConstroller.update)
    .delete('/:id', specializationConstroller._delete);

    module.exports = router;