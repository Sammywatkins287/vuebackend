const mongoose = require ('mongoose');
//article schema:defining the elements/structure of uur article
const studentSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required:true,
        trim: true

    },
    lastname:{
        type: String,
        required:true,
        trim: true
    },
    email:{
        type: String,
        required:true,
        trim: true
    },
    phonenumber:{
        type: String,
        required:true,
        trim: true
    }
})
//line 19 exposes the article to other files
module.exports = mongoose.model('Student',studentSchema);