export default function ErrorAlert({ message, onDismiss }) {
  if (!message) return null;
  
  return (
    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-4 flex justify-between items-center max-w-7xl mx-auto">
      <span>{message}</span>
      <button onClick={onDismiss} className="text-red-600 hover:text-red-800 font-bold text-xl">×</button>
    </div>
  );
}
