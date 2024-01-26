import Link from "next/link";
import React from "react";

export default function notFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">We Hit a Brick Wall.</h2>
      <p>We could not find the Ticket you were looking for.</p>
      <p>
        Go Back To View all the current available
        <Link href="/tickets">Tickets</Link>
      </p>
    </main>
  );
}
