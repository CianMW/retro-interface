// 1 - initialize a server object with express
// 1 - export the server object
import sampleRoute from "./services/sampleRoute/index.js";
import cors from "cors";
import express from "express";
import dotenv from "dotenv/config";
import nodemailer from "nodemailer"

const app = express();


app.use(cors("*"))
app.use(express.json())

app.get('/test', (req, res) => {
    res.status(200).send({ message: "Test successful" });
})

app.post('/sendmail', (req, res) => {
   let payload = req.body.message
    async function main() {

      
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          service: "gmail",
        //   port: 587,
        //   secure: false, // true for 465, false for other ports
          auth: {
            user: process.env.EMAIL_ADDRESS, // generated ethereal user
            pass: process.env.EMAIL_PASSWORD, // generated ethereal password
          },
        });
      
        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: process.env.EMAIL_ADDRESS, // sender address
          to: process.env.EMAIL_ADDRESS, // list of receivers
          subject: "Hello ✔", // Subject line
          text: req.body.message, // plain text body
        //   html: "<b>Hello world?</b>", // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        return info.messageId
      }
     let messageId = main().catch(console.error);
      res.status(200).send({message:messageId})
})

app.use("/sampleRoute", sampleRoute);


export { app }