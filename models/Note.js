const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: [String], default: [] }, // Array of tags
    assignedDate: { type: Date, required: true }, // Assigned date
});

const Note = mongoose.model('Note', NoteSchema);
module.exports = Note;
