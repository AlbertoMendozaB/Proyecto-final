const express = require('express');
const router = express.Router();
const hospitalConstroller = require('../controllers/hospital.controller');

router
    .get('/', hospitalConstroller.get)
    .get('/:id', hospitalConstroller.getById)
    .post('/', hospitalConstroller.create)
    .put('/:id', hospitalConstroller.update)
    .delete('/:id', hospitalConstroller._delete);

    module.exports = router;