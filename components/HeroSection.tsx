'use client'

import TypeWriter from '@/components/TypeWriter'
import ProfilePicture from '@/components/ProfilePicture'
import { Button } from '@heroui/button'

export default function HeroSection({}) {
    const completions = [
        'curious by nature.',
        'architecturally minded.',
        'strategically focused.',
        'a collaborative team player.',
    ]

    return (
        <>
            <div
                className="pt-50 pb-150 flex justify-center items-center bg-secondary w-2/4"
                id="hero"
            >
                <div className="grid grid-flow-col grid-rows-1 gap-10">
                    <ProfilePicture imageLink={'./baltimore_oriole.jpg'} />
                    <div className="flex flex-col gap-4 text-primary">
                        <TypeWriter
                            staticText={'Hey, I am '}
                            completions={completions}
                        />
                        <div className="flex flex-col gap-2 ">
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
                                <Button color="primary" radius="sm">
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
