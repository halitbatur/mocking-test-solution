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

const mailOptions = {
    from:"halitfuatbatur@gmail.com",
    to:"halit@re-coded.com",
    subject:"NODE MAILER",
    html:"<h1> oh hello there</h1>"
}


const sendEmail = async (mailOptions) => {
    await transporter.sendMail(mailOptions, (err,data) => {
        if(err){
            console.log("Error" + err)
        }else{
            console.log("Email sent")
        }
    })
};

module.exports = sendEmail;