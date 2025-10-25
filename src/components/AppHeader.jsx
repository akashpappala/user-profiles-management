import React from "react";

export default function AppHeader() {
  return (
    <header className="bg-white px-8 py-3 border-b border-gray-200 flex justify-between items-center shadow h-20">
      <div>
        <div className="w-28 h-12 flex items-center justify-center border-2 border-black rounded font-extrabold text-xl tracking-wide uppercase" style={{letterSpacing: "2px"}}>
          LOGO
        </div>
      </div>
      <div className="flex gap-5 items-center text-2xl">
        {/* Menu icon */}
        <span className="text-black" title="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor"><rect width="20" height="2" x="2" y="6" rx="1"/><rect width="20" height="2" x="2" y="11" rx="1"/><rect width="20" height="2" x="2" y="16" rx="1"/></svg>
        </span>
        {/* Bell icon */}
        <span className="text-yellow-600" title="Notifications">
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16a2 2 0 0 0 1.985-1.75H6.015A2 2 0 0 0 8 16zm6.002-3a1 1 0 0 1-1-1V8a6 6 0 1 0-12 0v4a1 1 0 0 1-1 1h14z"/></svg>
        </span>
        {/* Profile icon */}
        <span className="text-blue-500 bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center border border-gray-300" title="Profile">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"/></svg>
        </span>
      </div>
    </header>
  );
}
