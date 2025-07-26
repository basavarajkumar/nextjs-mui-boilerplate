import React from "react";
import Link from "next/link";

export default function Custom404() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">
      <h1 className="text-6xl font-bold text-[#3ab87f]">404</h1>
      <p className="mt-4 text-xl text-gray-700">Page not found</p>
      <p className="mt-2 text-gray-500">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link href="/">
        <a className="mt-6 inline-block bg-[#3ab87f] text-white px-6 py-2 rounded shadow hover:bg-[#339e6e] transition">
          Go back home
        </a>
      </Link>
    </main>
  );
}
