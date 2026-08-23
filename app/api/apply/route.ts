import { NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/send-notification-email";

export async function POST(request: Request) {
  const formData = await request.formData();

  const fields: Record<string, string> = {};
  let attachments: { filename: string; content: Buffer }[] | undefined;

  for (const [key, value] of formData.entries()) {
    if (value instanceof File) {
      if (value.size > 0) {
        const buffer = Buffer.from(await value.arrayBuffer());
        attachments = [...(attachments ?? []), { filename: value.name, content: buffer }];
      }
      continue;
    }
    fields[key] = value;
  }

  try {
    await sendNotificationEmail({
      subject: `New candidate registration — ${fields.fullName ?? "Unknown"}`,
      fields,
      attachments,
    });
  } catch (error) {
    console.error("Failed to send candidate registration email", error);
    return NextResponse.json({ error: "Failed to submit registration" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
