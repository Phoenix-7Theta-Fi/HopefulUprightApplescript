import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Ayurvedic Healthcare Platform</h1>
      <nav>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
      </nav>
    </div>
  );
};

export default HomePage;
