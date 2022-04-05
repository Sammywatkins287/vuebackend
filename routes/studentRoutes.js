const express = require('express');
const database = require('../config/database');
const router = express.Router();
const Student = require('../models/student');

router.get('/student', (req, res) => {
    // res.render('student')
    res.send('student registration form')
});

//posting route
router.post('/student',async (req, res) => {
   
    try {
        const newStudent =  new Student(req.body);
        console.log(req.body)
        await newStudent.save();
        res.json({message: 'Student registered!', newStudent});

    } catch (error) {
        res.status(400).send('your data hasnot been saved to the database')
        console.log(error)
    }
});
//
//retrieving route

router.get('/studentData', async (req, res) => {
    try {
        const data = await Student.find({});
        // res.render('studentData', { students: data });
        res.json({message:'list of students',data});
    }
    catch (error) {
        return res.status(400).send({
            status: 400,
            message: 'Failed to retrieve data',
            error
        });

    }
});
//DELE
router.get('/deleteStudent/:id', async (req, res) => {
    try {
        const deleteStudent = await Student.deleteOne({ _id: req.params.id })
        // res.redirect('/studentData')
        res.json({message:'deleted student',deleteStudent});

    }
    catch {
        res.status(400).send('Unable to delete student from database');
    }
});

//fetching one student route
router.get('/oneStudent/:id', async (req, res) => {
    try {
        const student = await Student.findOne({ _id: req.params.id })
        // res.redirect('/studentData');
        res.json({message:'details of student',student});

    }
    catch {
        res.status(400).send('unable to retrieve one student');
    }
})






module.exports = router