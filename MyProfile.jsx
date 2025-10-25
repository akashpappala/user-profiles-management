import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useUsers } from "../context/UserContext";

const countries = ["India", "United States", "United Kingdom", "Australia", "Canada", "China", "France", "Germany"];
const states = ["Andhra Pradesh", "Karnataka", "Tamil Nadu", "Kerala", "Maharashtra", "Delhi", "Uttar Pradesh", "Gujarat"];

export default function MyProfile() {
  const { id } = useParams();
  const { users, updateUser } = useUsers();
  const user = users.find(u => u.id === Number(id));
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(user || {});

  if (!user) return (
    <div className="text-center mt-10">
      <h2 className="text-xl font-bold">User not found</h2>
      <Link className="text-purple-600 underline" to="/">Back to Users</Link>
    </div>
  );

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateUser(user.id, form);
    setEditMode(false);
  };

  return (
    <div className="bg-white rounded-xl shadow border border-gray-200 p-8 mt-8 max-w-6xl mx-auto">
      <div className="flex gap-6 items-center">
        <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center text-4xl text-purple-600 font-bold border border-gray-200">
          <span role="img" aria-label="profile">&#128100;</span>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{form.name}</h2>
          <div className="text-gray-600">{form.email}</div>
          <div className="text-gray-600">{form.contact}</div>
        </div>
      </div>
      <nav className="flex gap-4 mt-8 mb-6">
        <button className="px-4 py-2 rounded bg-purple-100 text-purple-800 font-medium">Basic Info</button>
        <button className="px-4 py-2 rounded bg-gray-100 text-gray-800 font-medium">Education & Skills</button>
        <button className="px-4 py-2 rounded bg-gray-100 text-gray-800 font-medium">Experience</button>
      </nav>
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Basic Details</h3>
          {editMode ? (
            <button className="bg-green-600 text-white px-3 py-1 rounded" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button className="bg-purple-100 px-3 py-1 rounded" onClick={() => setEditMode(true)}>
              Edit
            </button>
          )}
        </div>
        <form className="grid grid-cols-3 gap-4">
          {[
            { label: "First name", name: "firstName" },
            { label: "Last name", name: "lastName" },
            { label: "Email ID", name: "email" },
            { label: "Alternate Phone no", name: "alternatePhone" },
            { label: "Year of birth", name: "yearOfBirth", type: "number" },
            { label: "Gender", name: "gender", type: "select", options: ["Male", "Female", "Other"] },
            { label: "Phone number", name: "phoneNumber" },
            { label: "Address", name: "address" },
            { label: "Pincode", name: "pincode" },
            { label: "Domicile state", name: "domicileState", type: "select", options: states },
            { label: "Domicile country", name: "domicileCountry", type: "select", options: countries }
          ].map(f => (
            <div key={f.name}>
              <label className="block text-xs text-gray-500 mb-1">{f.label}</label>
              {f.type === "select" ? (
                <select
                  disabled={!editMode}
                  name={f.name}
                  className="w-full border rounded px-3 py-2"
                  value={form[f.name] || ""}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  {f.options.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : (
                <input
                  name={f.name}
                  className="w-full border rounded px-3 py-2"
                  type={f.type || "text"}
                  value={form[f.name] || ""}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              )}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}
