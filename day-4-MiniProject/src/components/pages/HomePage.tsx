import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HomePage() {

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="w-full p-4 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Choose Profile Type
        </h1>
      </header>
      <div className="flex items-center justify-center mt-8 space-x-8">
        <Link
          to="groom"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
        >
          Groom
        </Link>
        <Link
          to="bride"
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
        >
          Bride
        </Link>
        <Link
          to="create-profile"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
        >
          Create profile
        </Link>
      </div>
      <div className="mt-8">
        <Outlet />
      </div>
    </div>
  );
}
