import Link from "next/link";

export default function NavBar() {
  return (
  <nav className="bg-linear-to-b from-black to-gray-700 text-gray-300">
  <div className="relative mx-auto flex h-14 max-w-7xl items-center px-4">

    <div className="flex items-center">
      <span className="text-lg font-semibold">
        Bold
      </span>
    </div>

    <div className="absolute left-1/2 hidden -translate-x-1/2 gap-6 md:flex ">
      <Link href="/" className="text-sm text-gray-300 hover:text-black">
        Home
      </Link>
      <Link href="/categories" className="text-sm text-gray-300 hover:text-black">
        Categories
      </Link>
      <Link href="/about" className="text-sm text-gray-300 hover:text-black">
        About
      </Link>
    </div>

    <div className="ml-auto flex items-center gap-4">
      <Link href="/login" className="text-sm text-gray-300 hover:text-black">
        Login
      </Link>
      <Link
        href="/register"
        className="rounded-md bg-black px-3 py-1.5 text-sm text-white hover:bg-gray-800"
      >
        Sign Up
      </Link>
    </div>

  </div>
</nav>
  );
}