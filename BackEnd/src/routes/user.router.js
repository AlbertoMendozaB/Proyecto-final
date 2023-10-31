const express = require('express');
const router = express.Router();
const userConstroller = require('../controllers/user.controller');

router
    .get('/', userConstroller.get)
    .get('/:id', userConstroller.getById)
    .post('/', userConstroller.create)
    .put('/:id', userConstroller.update)
    .delete('/:id', userConstroller._delete);

    module.exports = router;