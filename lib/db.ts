import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function initContactsTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      project TEXT,
      submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
  // migrate existing tables that still have the instagram column
  await sql`
    DO $$
    BEGIN
      IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'contacts' AND column_name = 'instagram') THEN
        ALTER TABLE contacts RENAME COLUMN instagram TO phone;
      END IF;
    END$$
  `;
}

export async function insertContact(data: {
  name: string;
  email: string;
  phone?: string;
  project?: string;
}) {
  await sql`
    INSERT INTO contacts (name, email, phone, project)
    VALUES (${data.name}, ${data.email}, ${data.phone ?? null}, ${data.project ?? null})
  `;
}

export async function getContacts() {
  const rows = await sql`
    SELECT id, name, email, phone, project, submitted_at
    FROM contacts
    ORDER BY submitted_at DESC
  `;
  return rows as {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    project: string | null;
    submitted_at: string;
  }[];
}
