import Link from "next/link"
export default function NavBar() {
    return (
        <nav className="border-b bg-white">
            {/* left side */}
            <div className="text-lg font-semibold">
                Bold
            </div>
            <div className="hidden gap-6 md-flex">
                <Link href="/" className="text-sm hover:text-black text-gray-600">
                    Home
                </Link>
                <Link href="/categories" className="text-sm hover:text-black text-gray-600">
                    Categories
                </Link>
                <Link href="/about" className="text-sm hover:text-black text-gray-600">
                    About
                </Link>
            </div>
            {/* right side */}
            <div>
                <Link href="/login" className="text-sm text-gray-600 hover:text-black">
                    Login
                </Link>
                <Link href="/register" className="rounded-md bg-black px-3 py-1.5 text-sm text-white hover:bg-gray-800">
                    Sign Up
                </Link>
            </div>
        </nav>
    )
}