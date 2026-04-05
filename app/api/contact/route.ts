import { initContactsTable, insertContact } from "@/lib/db";

export async function POST(request: Request) {
  const { name, email, phone, project } = await request.json();

  if (!name || !email) {
    return Response.json({ error: "Name and email are required" }, { status: 400 });
  }

  await initContactsTable();
  await insertContact({ name, email, phone, project });

  return Response.json({ success: true });
}
