import NavBar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import { ScrollIndicator } from '@/components/ScrollIndicator'
import { EducationSection } from '@/components/EducationSection'
import { WorkSection } from '@/components/WorkSection'
import ProjectSection from '@/components/ProjectSection'

export default function Main() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center bg-background dark">
            <div className="w-full">
                <NavBar />
            </div>
            <div
                className="pb-24 flex justify-center items-center w-full min-h-[calc(100dvh-4rem)]"
                id="hero"
            >
                <HeroSection />
            </div>
            <div className="mt-48 flex flex-col gap-2 w-full min-h-dvh">
                <AboutSection />
            </div>
            <div className="mt-48 flex flex-col gap-2 w-full min-h-dvh">
                <EducationSection />
            </div>
            <div className="mt-48 flex flex-col gap-2 w-full min-h-dvh">
                <WorkSection />
            </div>
            <div className="mt-48 flex flex-col gap-2 w-full min-h-dvh">
                <ProjectSection />
            </div>
            <ScrollIndicator />
        </div>
    )
}
