import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./dojo-logo.png";

export default function Navbar() {
  return (
    <div>
      <nav>
        <Image
          alt="Dojo Helpdesk logo"
          src={logo}
          quality={100}
          width={70}
          placeholder="blur"
        />
        <h1>Dojo Helpdesk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/tickets/create">Create Ticket</Link>
      </nav>
    </div>
  );
}
