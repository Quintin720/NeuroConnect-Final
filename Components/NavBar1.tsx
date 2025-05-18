import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="w-full bg-white/70 backdrop-blur-md shadow-sm p-4 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-yellow-700">
          NeuroConnect
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-yellow-800">Home</Link>
          <Link href="/my-story" className="text-gray-700 hover:text-yellow-800">My Story</Link>
          <Link href="/chatbot" className="text-gray-700 hover:text-yellow-800">Chatbot</Link>
          <Link href="/courses" className="text-gray-700 hover:text-yellow-800">Training</Link>
          <Link href="/contact" className="text-gray-700 hover:text-yellow-800">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
