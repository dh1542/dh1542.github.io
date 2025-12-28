import NavBar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import About from '@/components/About'

export default function Main() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center bg-secondary">
            <NavBar />
            <HeroSection />

            <About />
        </div>
    )
}
