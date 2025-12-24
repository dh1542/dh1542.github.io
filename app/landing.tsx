'use client'

import NavBar from '@/components/Navbar'
import TypeWriter from '@/components/TypeWriter'
import ProfilePicture from '@/components/ProfilePicture'
import { Button } from '@heroui/button'

export default function Landing() {
    const completions = [
        'curious by nature.',
        'architecturally minded.',
        'strategically focused.',
        'a collaborative team player.',
    ]

    return (
        <>
            <div className="h-lvh w-full flex items-start justify-center">
                <div className="grid grid-flow-col grid-rows-1 gap-10 p-30">
                    <ProfilePicture imageLink={'./baltimore_oriole.jpg'} />
                    <div className="flex flex-col gap-4">
                        <TypeWriter
                            staticText={'Hey, I am '}
                            completions={completions}
                        />
                        <div className="flex flex-col gap-2 w-150 h-150">
                            <h2 className="text-10xl md:text-4xl font-bold tracking-tight">
                                {' '}
                                Dominik Hoffmann{' '}
                            </h2>
                            <div className=" flextext-lg md:text-xl text-gray-500">
                                <p>
                                    I’m a developer focused on React and Spring
                                    Boot, building clean and scalable web
                                    applications. Curious by nature, I’m always
                                    learning and expanding my skill set.
                                </p>
                            </div>
                            <div className="flex flex-row gap-4">
                                <Button color="secondary" radius="sm">
                                    Contact
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
