const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/email")

const ServiceRequestModel = require("../models/serviceRequest");

// This API endpoint is used to fetch all service requests from the database
// You may extend the code to have a filter functionality as well
router.get("/", async (req, res) => {
    const allServiceRequests = await ServiceRequestModel.find({});
    res.json(allServiceRequests);
});

// This API endpoint is used to create a new service request
// If the service request is completed successfully, we will send a confirmation email to the customer
router.post("/", async (req, res) => {
    const newServiceRequestData = req.body;
    const {email,customerName} = req.body;
    try {
        const newServiceRequest = await ServiceRequestModel.create(newServiceRequestData);
        if (newServiceRequest) {
            sendEmail({ email, customerName})
        }
        res.status(201).json(newServiceRequest);
    } catch(err) {
        res.status(422).json({ message: err.message });
    }
});

module.exports = router;