export default function Footer() {
    return (
        <footer className="mt-24 border-t pt-6 text-center text-sm text-gray-500">
            <p>
                © {new Date().getFullYear()} Eljos Samra. Built with{' '}
                <a
                    href="https://reactjs.org"
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    React
                </a>{' '}
                &{' '}
                <a
                    href="https://tailwindcss.com"
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Tailwind CSS
                </a>
                .
            </p>
        </footer>
    )
}
