import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const destination = process.env.LEAD_WEBHOOK_URL;

  if (!destination) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const payload = await request.formData();
  const result = await fetch(destination, { method: "POST", body: payload });

  if (!result.ok) {
    return NextResponse.json({ error: "Submit failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
