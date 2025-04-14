import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
    return (
        <div className="font-sans text-gray-800 bg-white">
            <Header />
            <main className="space-y-24 px-6 sm:px-10 lg:px-24">
                <Hero />
                <About />
                <Projects />
            </main>
            <Footer />
        </div>
    )
}

export default App