import React from "react";
import CreateForm from "./createForm";

export default function page() {
  return (
    <main>
      <h2 className="text-center text-primary">Add A New Ticket</h2>
      <CreateForm />
    </main>
  );
}
