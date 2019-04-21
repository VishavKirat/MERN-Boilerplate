import mongoose from 'mongoose';

let Schema = mongoose.Schema;
//create the new schema :

export const ContactSchema = new Schema({
    firstName : {
        type:String,
        required: "Enter a first name"
    },
    lastName : {
        type:String,
        required: "Enter a last name"
    },
    email : {
        type:String
    },
    company : {
        type:String
    },
    phoneNumber:{
        type: Number
    },
    date_created:{
        type: Date,
        default: Date.now
    }
})