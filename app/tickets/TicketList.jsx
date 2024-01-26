import Link from "next/link";

async function getTickets() {
  //await new Promise((resolve) => setTimeout(resolve, 3000)); // imitate delay
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0, //only fetching data after 0seconds so constantly data fetching whenever we refresh the browser so it is
      //not showing any cached data if --> 10s , will refresh only after 10s
    },
  });
  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets!!</p>
      )}
    </>
  );
}
