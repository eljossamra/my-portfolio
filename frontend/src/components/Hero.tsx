export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-[70vh] flex flex-col justify-center items-start text-left space-y-4"
        >
            <h1 className="text-5xl font-bold tracking-tight leading-tight text-gray-900">
                Hi, I’m Eljos.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                I'm a technical lead and software engineer passionate about clean architecture, building systems that scale, and mentoring devs along the way.
            </p>
            <a
                href="#projects"
                className="inline-block bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition-colors"
            >
                View My Work
            </a>
        </section>
    )
}