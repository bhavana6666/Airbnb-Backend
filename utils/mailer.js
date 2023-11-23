const { createTransport } = require("nodemailer");

const transport = createTransport({
  service: "gmail",
  auth: {
    user: "bhavanakarri66@gmail.com",
    pass: process.env.GOOGLE_PASSWORD,
  },
});

const sendMail = (to, subject, body, attachments) => {
  transport.sendMail({
    to,
    subject,
    html: body,
    attachments,
    from: "bhavanakarri66@gmail.com",
  });
};
module.exports = {sendMail};