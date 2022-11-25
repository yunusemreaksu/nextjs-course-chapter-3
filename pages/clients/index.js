import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    { id: "yunus", name: "Yunus" },
    { id: "emre", name: "Emre" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
