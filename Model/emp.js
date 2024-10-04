const mongoose = require("mongoose")

//!schema
const empSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    password:{type:String,required:true},

    address:{
        type:String,
        required:true
    },

    position: {
    type: String,
    required: true,
},
    department: {
    type: String,
    required: true,
},
    salary: {
    type: Number,
    required: true,
    min: [0, 'Salary must be positive'],
},
    dateOfJoining: {
    type: Date,
    required: true,
    default: Date.now,
},
    active: {
    type: Boolean,
    default: true,
}
,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("myEmpCollection",empSchema)