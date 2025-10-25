export default function Header({ onAddClick }) {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 mb-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">User Profiles</h1>
        <button
          onClick={onAddClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition"
        >
          + Add User
        </button>
      </div>
    </div>
  );
}
