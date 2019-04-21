import mongoose from 'mongoose'
import {ContactSchema} from '../Model/contactDbModel'

// declare the model first and then the function related:
const Contact = mongoose.model('Contact',ContactSchema)
export const addContactToDb = (req,res) =>{
  const newContact = new Contact(req.body);
  newContact.save()
            .then(()=>{
                res.json(req.body)
            })
            .catch((error)=>{
                res.send(error)
            })
}

export const getAllContact = (req,res)=>{
    Contact.find({})
            .then((contact)=>{
                res.json(contact)
            })
            .catch((error)=>{
                res.send(error)
            })
}
export const getSpecificContact = (req,res)=>{
    Contact.findById(req.params.id)
            .then((contact)=>{
                res.json(contact)
            })
            .catch((error)=>{
                res.send(error)
            })
}