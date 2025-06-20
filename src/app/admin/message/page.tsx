import { AdminHeader } from "@/components/AdminHeader";
import MsgSubject from "@/components/MsgSubject";
import { getMessages } from "@/lib/getMessages";

export default async function MessagesPage() {
  const messages = await getMessages();

  return (
    <main className="admin-section p-20 flex flex-col gap-10">
      <AdminHeader />
      <section className="title flex gap-2 items-center">
        <h2 className="text-2xl">Messages</h2>
        {messages.length === 0 ? (
          <p>No messages found</p>
        ) : (
          <p>({messages.length})</p>
        )}
      </section>
      {messages.length > 0 && (
        <table className="w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg.id}>
                <td> {msg.name + " " + msg.lastName}</td>
                <MsgSubject
                  id={msg.id}
                  subject={msg.subject || "..."}
                  isRead={msg.isRead}
                />
                <td>{new Date(msg.createdAt).toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
