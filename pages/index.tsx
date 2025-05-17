import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-yellow-50 to-white p-8 text-center">
      <div className="max-w-xl">
        <Image
          src="/logo.png"
          alt="NeuroConnect Logo"
          width={200}
          height={200}
          priority
        />
        <h1 className="text-5xl font-extrabold text-yellow-700 mt-6">NeuroConnect</h1>
        <p className="mt-4 text-xl font-medium text-gray-700 italic">
          Breaking Barriers to Unlock Unique Autistic Potential
        </p>
        <p className="mt-8 text-gray-600">
          Welcome to our employer and educator hub — your neuroaffirmative resource for
          understanding, supporting, and celebrating Autistic talent.
        </p>
      </div>
    </main>
  );
}
