"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setisLoading] = useState(false);

  const handlesubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    const ticket = {
      title,
      body,
      priority,
      user_email: "omadityashukla7@gmail.com",
    };
    const res = await fetch("http://localhost:4000/tickets", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(ticket),
    });
    if (res.status === 201) {
      router.refresh();
      router.push("/tickets");
    }
  };

  return (
    <form onSubmit={handlesubmit} className="w-1/2">
      <label>
        <span>Title : </span>
        <input
          required
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Body : </span>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <label>
        <span>Priority : </span>
        <select onChange={(e) => setPriority(e.target.value)} value={priority}>
          <option value="low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <button className="btn-primary">
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Ticket</span>}
      </button>
    </form>
  );
}
