import React, { useState, useEffect } from "react";

export default function AddUserModal({ open, onClose, onSubmit, editingUser }) {
  const [form, setForm] = useState({ name: "", email: "", contact: "" });

  useEffect(() => {
    if (editingUser) setForm(editingUser);
    else setForm({ name: "", email: "", contact: "" });
  }, [editingUser, open]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  if (!open) return null;

  return (
    // Slide-in modal from right
    <div className="fixed inset-0 z-50 flex">
      {/* Dim background */}
      <div
        className="flex-1 bg-black bg-opacity-40"
        onClick={onClose}
      />
      {/* Modal Sidebar */}
      <div className="w-[500px] max-w-full bg-white shadow-2xl h-full p-10 flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">Add User</h2>
          <button className="text-2xl text-gray-600" onClick={onClose}>&times;</button>
        </div>
        <div className="space-y-6 flex-1">
          <div>
            <label className="block mb-1 text-sm text-gray-500">Name of the user</label>
            <input
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-purple-400"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Type here"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-500">E-mail</label>
            <input
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-purple-400"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Type here"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-500">Contact</label>
            <input
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-purple-400"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              placeholder="Type here"
            />
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-8">
          <button className="px-5 py-2 rounded border border-purple-100 bg-purple-50" onClick={onClose}>
            Cancel
          </button>
          <button
            className="px-5 py-2 rounded text-white bg-purple-600 hover:bg-purple-700"
            onClick={() => onSubmit(form)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
