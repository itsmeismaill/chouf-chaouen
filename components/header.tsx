import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-200 via-blue-400 to-blue-500 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto">
        <nav className="flex justify-start items-center">
          <Link href="/">
            <img src="/logo.png" alt="Chouf-chaouen Logo" className="h-10 mr-3" />
          </Link>
          <Link href="/" className="text-3xl font-bold tracking-wide hover:text-chefchaouen-accent transition-colors">
            CHOF-CHAOUEN
          </Link>
          <div className="ml-auto flex items-center">
        <Link href="/contact">
          <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-chefchaouen-accent-dark transition-colors">
          Contact
          </button>
        </Link>
        </div>
        </nav>
       
      </div>
    </header>
  )
}

