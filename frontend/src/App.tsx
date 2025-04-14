import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
    return (
        <div className="font-sans text-gray-800 bg-white">
            <Header />
            <main className="page-container space-y-24">
                <Hero />
                <About />
                <Projects />
            </main>
            <Footer />
        </div>
    )
}

export default App