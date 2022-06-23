const nodemailer = require("nodemailer")


const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        type:"OAuth2",
        user:process.env.MAIL_USERNAME,
        pass:process.env.MAIL_PASSWORD,
        clientId:process.env.CLIENT_ID,
        clientSecret:process.env.CLIENT_SECRET,
        refreshToken:process.env.REFRESH_TOKEN
    }
});

const sendEmail = async (userDetails) => {

    const mailOptions = {
        from:"halitfuatbatur@gmail.com",
        to:userDetails.sendEmail,
        subject:"NODE MAILER",
        html:`<h1> oh hello ${userDetails.customerName}</h1>`
    }


    await transporter.sendMail(mailOptions, (err,data) => {
        if(err){
            console.log("Error" + err)
        }else{
            console.log("Email sent")
        }
    })
};

module.exports = sendEmail;