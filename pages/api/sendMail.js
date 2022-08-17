export default function sendMail(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  let nodemailer = require("nodemailer");
  process.env.SENDGRID_API_KEY

  const transporter = nodemailer.createTransport({
    port: 587,
    host: "smtp.sendgrid.net",
    auth: {
      user: "apikey",
      pass: process.env.SENDGRID_API_KEY,
    },
  });

  const { payload } = req.body;
  const message = `${payload.message}\n \nReply to: ${payload.email}`;
  console.log(message);

  var data = {
    from: "youssefboulmalf@youssefboulmalf.nl",
    to: "youssefboulmalf@gmail.com",
    subject: `New message from ${payload.name}`,
    text: message,
  };
  transporter.sendMail(data, function (err, info) {
    if (err) console.log(err);
  });
  res.status(200);
}
