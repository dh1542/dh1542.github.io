import NavBar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import About from '@/components/About'

export default function Main() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center bg-primary">
            <div className="w-full">
                <NavBar />
            </div>
            <div
                className="mt-48 flex justify-center items-center w-full h-4/5"
                id="hero"
            >
                <HeroSection />
            </div>
            <div className="mt-48 flex flex-col gap-2 w-full">
                <About />
            </div>
        </div>
    )
}
