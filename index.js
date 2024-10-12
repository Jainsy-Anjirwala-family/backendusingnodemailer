import express from 'express';
import bodyParser from 'body-parser';
import sendmail from './sendmail.js';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

    app.post('/send-email',async (req, res) => {
        try {
            const detail = await sendmail.sendMailData(req.body);
            res.status(201).send(detail)
        } catch (err) {
            res.status(500).send({"msgCode": 'NOT_SEND_500', "error_status": true});
        }

      });

      app.listen(3000, () => {
        console.log(`Server is running on http://localhost:300`);
      });
      