// components/NavBar.tsx

import Link from 'next/link';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/courses">Courses</Link>
      <Link href="/chatbot">Chatbot</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default NavBar;
