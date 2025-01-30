const nodemailer = require("nodemailer")

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            from: process.env.MY_GMAIL,
            subject: "Verification code of auth",

            service: "gmail",
            auth: {
                user: process.env.MY_GMAIL,
                pass: process.env.PASS_KEY
            }
        })
    }
    async sendMail(to, code) {
        await this.transporter.sendMail({
            to: to,
            subject: "email aktivlashtrish",
            text: "",
            html: `<p> verify code <b> ${code} </b> </p>`,


        })
    }
}
module.exports = new MailService()