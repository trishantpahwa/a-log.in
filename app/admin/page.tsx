import { initContactsTable, getContacts } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  await initContactsTable();
  const contacts = await getContacts();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Contact Submissions</h1>
        <p className="text-gray-400 mb-8">{contacts.length} total submission{contacts.length !== 1 ? "s" : ""}</p>

        {contacts.length === 0 ? (
          <p className="text-gray-500">No submissions yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead className="bg-white/5 text-gray-400 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-4 text-left">#</th>
                  <th className="px-6 py-4 text-left">Name</th>
                  <th className="px-6 py-4 text-left">Email</th>
                  <th className="px-6 py-4 text-left">Phone</th>
                  <th className="px-6 py-4 text-left">Project</th>
                  <th className="px-6 py-4 text-left">Submitted</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {contacts.map((c) => (
                  <tr key={c.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-gray-500">{c.id}</td>
                    <td className="px-6 py-4 font-medium">{c.name}</td>
                    <td className="px-6 py-4">
                      <a href={`mailto:${c.email}`} className="text-cyan-400 hover:underline">
                        {c.email}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-gray-400">{c.phone ?? "—"}</td>
                    <td className="px-6 py-4 text-gray-300 max-w-xs truncate">{c.project ?? "—"}</td>
                    <td className="px-6 py-4 text-gray-500 whitespace-nowrap">
                      {new Date(c.submitted_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
