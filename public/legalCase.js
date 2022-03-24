const mongoose = require('mongoose');

const CaseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    surname : {type: String, required: true},
    email : {type: String, required: true},
    idUser : {type: String, required: true},
    phoneNumber : {type: String, required: true},
})

module.exports = mongoose.model('LegalCase', CaseSchema);