export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center py-24"
        >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-500 opacity-80 -z-10" />

            {/* Glass panel */}
            <div className="page-container bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-10 space-y-6">
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight text-gray-900">
                    Hi, I’m Eljos.
                </h1>
                <p className="text-lg text-gray-700 max-w-xl leading-relaxed">
                    I’m a technical lead who builds scalable systems, mentors engineers,
                    and delivers production-grade code with clarity and purpose.
                </p>
                <a
                    href="#projects"
                    className="inline-block bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition"
                >
                    View My Work
                </a>
            </div>
        </section>
    )
}