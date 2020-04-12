// Router for content requests.
const express = require('express');
const courses = require('./controllers/courses');
const sections = require('./controllers/sections');

// Create the router
const router = express.Router();

// Course requests
router.get('/courses', courses.index);
router.get('/courses/:id', courses.retrieve);

// Section requests
router.get('/sections', sections.index);

module.exports = router;