import { NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/send-notification-email";

export async function POST(request: Request) {
  const formData = await request.formData();

  const fields: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") {
      fields[key] = value;
    }
  }

  try {
    await sendNotificationEmail({
      subject: `New employer request — ${fields.companyName ?? "Unknown company"}`,
      fields,
    });
  } catch (error) {
    console.error("Failed to send employer request email", error);
    return NextResponse.json({ error: "Failed to submit request" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
