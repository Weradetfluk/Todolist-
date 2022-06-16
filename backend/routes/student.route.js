const express = require('express');
const studentRoute = express.Router();

// Student model
let StudentModel = require('../models/todolist');

// Get all data
studentRoute.route('/').get((req, res, next) => {
    StudentModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

studentRoute.route('/add_todolist').post((req, res, next) => {
    StudentModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})


studentRoute.route('/edit-student/:id').get((req, res, next) => {
    StudentModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    })
})


studentRoute.route('/update_todolist/:id').put((req, res, next) => {
    StudentModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('Todolist successfully updated');
        }
    })
})


studentRoute.route('/delete_todolist/:id').delete((req, res, next) => {
    StudentModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = studentRoute;

