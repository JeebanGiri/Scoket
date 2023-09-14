import { createTranssport, SendMailOptions } from 'nodemailer';
import { SMTP } from 'src/constant';

const transporter = createTranssport({
  host: SMTP.host,
  port: SMTP.port,
  secure: true,
  auth: {
    user: SMTP.user,
    password: SMTP.password,
  },
});
const sendMail = async (options: SendMailOptions) => {
  try {
    options.from = {
      name: 'Socket Tutorials',
      address: SMTP.user,
    };
    const result = await transporter.sendMail(options);
    console.log(result, 'Mail sent sucessfully');
    return { message: 'Mail sent sucessfully' };
  } catch (err) {
    console.log('Mail cannot be sent sucessfully', err);
  }
};

export { sendMail };
