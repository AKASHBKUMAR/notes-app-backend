const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// Create a new note
router.post('/', async (req, res) => {
    const { title, content, tags, assignedDate } = req.body;
    try {
        const newNote = new Note({ title, content, tags, assignedDate });
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Other routes...

module.exports = router;
