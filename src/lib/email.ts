// src/lib/email.ts

import nodemailer from 'nodemailer';

// 1) Pull in both possible env‑var names, in case you named yours EMAIL_PASSWORD
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS =
  process.env.EMAIL_PASS || process.env.EMAIL_PASSWORD;

if (!EMAIL_USER || !EMAIL_PASS) {
  throw new Error(
    'Missing SMTP credentials: make sure you have EMAIL_USER and EMAIL_PASS (or EMAIL_PASSWORD) in your .env'
  );
}

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,    // false = STARTTLS
  requireTLS: true, // insists on STARTTLS
  auth: {
    user: EMAIL_USER, // your full Gmail address
    pass: EMAIL_PASS, // Gmail app‑password or real pass if not 2FA
  },
  // you can optionally tweak the TLS options here:
  // tls: { rejectUnauthorized: true }
});

// 2) Verify once on startup, but only WARN on failure
transporter
  .verify()
  .then(() => console.log('✅ SMTP configuration is valid.'))
  .catch((err) =>
    console.warn('⚠️ SMTP configuration check failed:', err)
  );

export async function sendVerificationEmail(
  to: string,
  username: string,
  verificationCode: string
): Promise<boolean> {
  const mailOptions = {
    from: `"AccountingZone" <${EMAIL_USER}>`,
    to,
    subject: 'Verify Your AccountingZone Account',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #fbc710; text-align: center;">AccountingZone</h2>
        <h3 style="text-align: center;">Verify Your Account</h3>
        <p>Hello ${username},</p>
        <p>Thank you for registering with AccountingZone. To complete your registration, please use the verification code below:</p>
        <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 24px; font-weight: bold; letter-spacing: 5px; margin: 20px 0;">
          ${verificationCode}
        </div>
        <p>This code will expire in 1 hour.</p>
        <p>If you did not request this verification, please ignore this email.</p>
        <p>Best regards,<br>The AccountingZone Team</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`📧 Verification email sent to ${to}`);
    return true;
  } catch (err) {
    console.warn('⚠️ Error sending verification email:', err);
    return false;
  }
}
