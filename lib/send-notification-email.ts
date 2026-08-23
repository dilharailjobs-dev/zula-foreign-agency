import { Resend } from "resend";

const NOTIFICATION_EMAIL = "dilhara.iljobs@gmail.com";

export async function sendNotificationEmail({
  subject,
  fields,
  attachments,
}: {
  subject: string;
  fields: Record<string, string>;
  attachments?: { filename: string; content: Buffer }[];
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(apiKey);

  const text = Object.entries(fields)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "Zula Foreign Agency <onboarding@resend.dev>",
    to: NOTIFICATION_EMAIL,
    replyTo: fields.email || undefined,
    subject,
    text,
    attachments,
  });

  if (error) {
    throw new Error(error.message);
  }
}
