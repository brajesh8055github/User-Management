import { useState } from "react";
const API = "https://jsonplaceholder.typicode.com/users";

export default function UserForm({ initial = {}, onSuccess }) {
  const [form, setForm] = useState(() => ({
    name: initial.name || "",
    email: initial.email || "",
    phone: initial.phone || "",
  }));

  const [loading, setLoading] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setLoading(true);

    const method = initial.id ? "PUT" : "POST";
    const url = initial.id ? `${API}/${initial.id}` : API;

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);
    onSuccess(data);
  }

  return (
    <form
      onSubmit={submit}
      className="bg-white shadow p-6 rounded-lg grid gap-4 max-w-lg mx-auto"
    >
      <input
        name="name"
        value={form.name}
        onChange={change}
        placeholder="Name"
        className="border p-2 rounded"
      />

      <input
        name="email"
        value={form.email}
        onChange={change}
        placeholder="Email"
        className="border p-2 rounded"
      />

      <input
        name="phone"
        value={form.phone}
        onChange={change}
        placeholder="Phone"
        className="border p-2 rounded"
      />

      <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        {loading ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
