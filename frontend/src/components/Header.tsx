export default function Header() {
    return (
        <header className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <div className="text-xl font-bold tracking-tight text-gray-900">
                    Eljos Samra
                </div>
                <nav className="hidden space-x-6 text-sm font-medium text-gray-600 sm:flex">
                    <a href="#about" className="hover:text-gray-900 transition-colors">
                        About
                    </a>
                    <a href="#projects" className="hover:text-gray-900 transition-colors">
                        Projects
                    </a>
                    <a href="#contact" className="hover:text-gray-900 transition-colors">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    )
}