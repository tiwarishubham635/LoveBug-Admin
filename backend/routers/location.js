const express = require('express')
const Router = new express.Router()
const Location = require('../models/location')

const Contest = require('../models/contest')
Router.post('/',async (req,res)=>{ // done
    try {
        const location = await Location.create(req.body)
        const contest = await Contest.findById(location.contest._id)
       
        contest.locations.push(location._id)
        await contest.save()
        res.send({location,success:true})
    } catch (error) {
        console.log(error)
        res.status(400).send({success:false})
    }
    
})
Router.get('/',async (req,res)=>{ // done
    try {
        const questions = await Location.findById(req.query.loc_id).populate("questions")
        res.send(questions)
    } catch (error) {
        console.log(error)
        res.status(400).send({success:false})
    }
})
module.exports = Router
