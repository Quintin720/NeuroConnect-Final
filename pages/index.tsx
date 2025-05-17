import Image from 'next/image'

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-fixed bg-center bg-cover p-8 text-center"
      style={{ backgroundImage: "url('/texture.svg')" }}
    >
      <div className="backdrop-blur-sm bg-white/80 rounded-2xl p-8 shadow-xl max-w-xl">
        <Image
          src="/logo.png"
          alt="NeuroConnect Logo"
          width={180}
          height={180}
          priority
        />
        <h1 className="text-4xl font-extrabold text-yellow-700 mt-6">NeuroConnect</h1>
        <p className="mt-3 text-lg text-gray-700 italic">
          Breaking Barriers to Unlock Unique Autistic Potential
        </p>
        <p className="mt-6 text-gray-600 leading-relaxed">
          Welcome to NeuroConnect — a hub built by and for Autistic voices.
          Here, we help employers and educators understand how to support and
          empower Autistic people using neuroaffirmative principles and practical tools.
        </p>
      </div>
    </main>
  );
}
