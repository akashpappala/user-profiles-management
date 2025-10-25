export default function UserCard({ user, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 border border-gray-200">
      <div className="flex items-center mb-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.role}</p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">{user.email}</p>
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
          user.status === 'Active' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-gray-100 text-gray-800'
        }`}>
          {user.status}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(user)}
          className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-700 py-2 rounded-lg font-medium transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="flex-1 bg-red-50 hover:bg-red-100 text-red-700 py-2 rounded-lg font-medium transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
