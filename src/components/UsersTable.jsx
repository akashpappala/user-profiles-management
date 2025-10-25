import React from "react";
import { Link } from "react-router-dom";

export default function UsersTable({ users, onOpenModal, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow border border-gray-200 p-6 mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Users</h2>
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-medium transition"
          onClick={onOpenModal}
        >
          + Add user
        </button>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 border-b">
            <th className="py-2 px-3 text-left font-medium">Sr. No</th>
            <th className="py-2 px-3 text-left font-medium">User name</th>
            <th className="py-2 px-3 text-left font-medium">E-mail</th>
            <th className="py-2 px-3 text-center font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, idx) => (
            <tr key={u.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-3">{idx + 1}</td>
              <td className="py-2 px-3">{u.name}</td>
              <td className="py-2 px-3">{u.email}</td>
              <td className="py-2 px-3 text-center">
                <Link
                  className="text-purple-600 hover:bg-purple-50 rounded p-2"
                  title="View"
                  to={`/profile/${u.id}`}
                >
                  <span role="img" aria-label="view">&#128065;</span>
                </Link>
                <button
                  className="text-red-600 hover:bg-red-50 rounded p-2 ml-2"
                  title="Delete"
                  onClick={() => onDelete(u.id)}
                >
                  <span role="img" aria-label="delete">&#128465;&#65039;</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
