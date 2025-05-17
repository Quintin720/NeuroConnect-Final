import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-center p-6">
      <div>
        <Image src="/logo.png" alt="NeuroConnect Logo" width={150} height={150} />
        <h1 className="text-4xl font-bold mt-4">Welcome to NeuroConnect</h1>
        <p className="text-lg mt-2">Breaking Barriers to Unlock Unique Autistic Potential</p>
        <p className="mt-6 text-gray-500">Your Autistic-trained chatbot is coming soon.</p>
      </div>
    </main>
  )
}
