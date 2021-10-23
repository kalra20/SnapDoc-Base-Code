const express = require("express");

const worksheetRoute = express.Router();

let worksheetModel = require("../models/worksheet")

worksheetRoute.route("/add").post((req, res) => {
    let worksheet = new worksheetModel(req.body)
    worksheet.save()
        .then(res.status(200).json({ response: "Worksheet added successfully" }))
        .catch(
            res.status(400).send("Something went wrong")
        )
})

worksheetRoute.route('/').get((rew,res) => {
    worksheetModel.find(function (err, worksheet) {
        if (err) {
            console.log(Error);
        }
        else {
            res.json(worksheet);
        }
    }); 
})

module.exports = worksheetRoute