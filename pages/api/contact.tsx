import { NextApiRequest, NextApiResponse } from 'next';
import { mailOptions, transporter } from '../../config/nodemailer'; // Ensure the path is correct

const CONTACT_MESSAGE_FIELDS: { [key: string]: string } = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const generateEmailContent = (data: ContactMessage) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ""
  );
  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h3>${CONTACT_MESSAGE_FIELDS[key]}</h3><p>${val}</p>`);
  }, "");

  return {
    text: stringData,
    html: `<!DOCTYPE html><html> <head> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <style type="text/css">body{margin:0; padding:0; width:100%;}table{border-collapse:collapse;}@media screen and (max-width: 525px){.wrapper{width:100% !important;}.responsive-table{width:100% !important;}.padding{padding:10px 5% !important;}}</style> </head> <body style="margin:0; padding:0; background:#fff"> <table width="100%"> <tr> <td align="center" style="padding:10px;"> <table style="max-width:500px;" class="responsive-table"> <tr> <td> <h2>New Contact Message</h2> <div>${htmlData}</div></td></tr></table></td></tr></table></body></html>`,
  };
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data: ContactMessage = req.body;
    if (!data || !data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).send({ message: "Bad request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.subject,
      });

      return res.status(200).json({ success: true });
    } catch (err) {
      console.error('Error sending email:', err);
      return res.status(500).json({ message: 'Error sending email' });
    }
  }
  return res.status(405).json({ message: "Method not allowed" });
};

export default handler;
