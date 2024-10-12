
import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport(
    {
        service:'gmail',
        auth:{
            user:'janjirwala33@gmail.com',
            pass: 'gbjbdwrawiojujdq'
        }

    }
);
const sendMailData = async(data)=>{
    return new Promise((resolve, reject) => {
    let mailOptions = {
        from: 'janjirwala33@gmail.com',
        to: data.send_to, // Dynamic recipient
        subject: data.subject, // Dynamic subject
        html: data.send_text // Dynamic text
      };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return reject({"msgCode": 'NOT_SEND_400', "error_status": true});
            }   
            resolve({"msgCode": 'SEND_MAIL_200', "error_status": false});
        });
    });
}

export default {
    sendMailData
}