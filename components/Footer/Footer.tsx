import Link from "next/link";

export default function Footer(){
    const currentYear = new Date().getFullYear()
    return(
    <footer className="bg-linear-to-b from-gray-700 to-black text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          <div>
            <h3 className="text-xl font-bold text-white">Bold</h3>
            <p className="mt-4 text-sm text-gray-400">
              Premium products crafted for everyday excellence.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Shop
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/categories" className="hover:text-white">Categories</Link></li>
              <li><Link href="/featured" className="hover:text-white">Featured</Link></li>
              <li><Link href="/sale" className="hover:text-white">Sale</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Support
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/returns" className="hover:text-white">Returns</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
          © {currentYear} Bold. All rights reserved.
        </div>

      </div>
    </footer>
    )
}