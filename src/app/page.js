import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="sm:h-52 bg-gradient-to-b from-blue-600 via-blue-500 to-purple-500 py-20 text-center relative border-b-4 border-blue-900">
        <div>
          <h3 className="font-bold text-3xl bg-gradient-to-r from-white via-blue-200 to-red-200 inline-block text-transparent bg-clip-text">Hi, I'm Tobirama Senju</h3>
        </div>
        <div>
          <Image src="https://lh6.googleusercontent.com/proxy/S8q8EVEdgw6bKNXxEHkmGLr-9VY8S075Bp1_-YWO9nLUgmJOWH13CuPRqGurgM-vULRljOdrpsWAjIeW5-lt20uuAFHZxpLcAvFplNlgRZgibdOMHtibwl8jtWJhAFJwC64t3WzEEazZq2GVjCs" width="200" priority height="200" alt="kakashi" className="rounded-full w-40 h-40 object-cover m-auto absolute shadow-2xl inset-x-0 top-32 sm:top-32" />
        </div>
      </header>

      <main className="bg-white mt-28 sm:mt-32 mb-10 p-10 m-2 rounded shadow">
        <h3 className="font-semibold">Share your reviews</h3>
        <ul className="my-5 space-y-4">
          <li>
            <Link href={'/reviews/youtube'} className="border rounded px-4 py-2 flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-red-500" ><path fill="currentColor" d="M23 9.71a8.5 8.5 0 0 0-.91-4.13a2.92 2.92 0 0 0-1.72-1A78 78 0 0 0 12 4.27a79 79 0 0 0-8.34.3a2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48 48 0 0 0 0 6.48a9.6 9.6 0 0 0 .3 2a3.14 3.14 0 0 0 .71 1.36a2.86 2.86 0 0 0 1.49.78a45 45 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.9 2.9 0 0 0 1.53-.78a2.5 2.5 0 0 0 .61-1a10.6 10.6 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54M9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08" /></svg>
              <span>YouTube Reviews</span>
              <span className="bg-blue-500 text-white px-2 rounded-full">50</span>
            </Link>
          </li>
          <li>
            <div className="border rounded px-4 py-2 flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-purple-500" ><path fill="currentColor" d="M12 14q-.425 0-.712-.288T11 13t.288-.712T12 12t.713.288T13 13t-.288.713T12 14m-4 0q-.425 0-.712-.288T7 13t.288-.712T8 12t.713.288T9 13t-.288.713T8 14m8 0q-.425 0-.712-.288T15 13t.288-.712T16 12t.713.288T17 13t-.288.713T16 14m-4 4q-.425 0-.712-.288T11 17t.288-.712T12 16t.713.288T13 17t-.288.713T12 18m-4 0q-.425 0-.712-.288T7 17t.288-.712T8 16t.713.288T9 17t-.288.713T8 18m8 0q-.425 0-.712-.288T15 17t.288-.712T16 16t.713.288T17 17t-.288.713T16 18M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z" /></svg>
              <span>Event Reviews</span>
            </div>
          </li>
        </ul>
      </main>
    </div>
  )
}
