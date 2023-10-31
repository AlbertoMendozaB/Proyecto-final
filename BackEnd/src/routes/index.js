const express = require('express');
const usersRouter = require('./user.router');
const hospitalsRouter = require('./hospital.router');
const specializationsRouter = require('./specialization.router');
function routerApi(app){
    const router= express.Router();
    app.use('api', router);
    router.use('/users',usersRouter);
    router.use('/hospitals',hospitalsRouter);
    router.use('/specializations',specializationsRouter);
};

module.exports = routerApi;