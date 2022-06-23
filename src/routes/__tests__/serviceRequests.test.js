const request = require("supertest");
const app = require("../../app");
const ServiceModal = require("../../models/serviceRequest");
const sendEmail = require("../../utils/email");

const mockBody = {
    _id: "randomid",
    customerName: "Halit",
    email: "halit@gmail.com",
    phoneNumber: 456789132,
    requestType: "Consultancy",
};


const mockCreateService = jest.spyOn(ServiceModal,"create");
mockCreateService.mockImplementation(() => mockBody)

jest.mock('../../utils/email')
sendEmail.mockResolvedValue("hello")

describe("Service Requests test",() => {

    test("Should send Email when request is created successfully", async () =>{
        const {email, customerName} = mockBody
        const response = await request(app)
            .post("/service-requests")
            .send(mockBody)
            .set("Content-Type", "application/json")

            expect(sendEmail).toHaveBeenCalledTimes(1);
            expect(sendEmail).toHaveBeenCalledWith({
                email,
                customerName
            })
            expect(ServiceModal.create).toHaveBeenCalledTimes(1);
    })


})