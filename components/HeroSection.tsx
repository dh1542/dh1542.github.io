'use client'

import TypeWriter from '@/components/TypeWriter'
import ProfilePicture from '@/components/ProfilePicture'
import { Button } from '@/components/ui/button'
import { Linkedin } from '@/components/ui/svgs/linkedin'
import IconButton from '@/components/IconButton'
import { GithubDark } from '@/components/ui/svgs/githubDark'

export default function HeroSection({}) {
    const completions = [
        'curious by nature.',
        'architecturally minded.',
        'strategically focused.',
        'a collaborative team player.',
    ]
    return (
        <div className="flex flex-col w-2/4">
            <div className="grid grid-flow-col grid-rows-1 gap-10 ">
                <ProfilePicture imageLink={'./baltimore_oriole.jpg'} />
                <div className="flex flex-col gap-4 text-primary">
                    <TypeWriter
                        staticText={'Hey, I am '}
                        completions={completions}
                    />
                    <div className="flex flex-col gap-2 ">
                        <h2 className="text-white text-10xl md:text-4xl font-bold tracking-tight">
                            {' '}
                            Dominik Hoffmann{' '}
                        </h2>
                        <div className="flex text-lg md:text-xl text-gray-500">
                            <p>
                                I’m a developer focused on React and Spring
                                Boot, building clean and scalable web
                                applications. Curious by nature, I’m always
                                learning and expanding my skill set.
                            </p>
                        </div>
                        <div className="pt-3 flex flex-col gap-1">
                            <div className="flex flex-row gap-4">
                                <Button
                                    onClick={() => console.log('HELLO')}
                                    className="w-1/4"
                                >
                                    Contact me
                                </Button>
                                <div
                                    className="relative after:absolute after:bottom-0 after:left-0
                        after:h-px after:w-0 after:bg-primary
                        hover:after:w-full after:transition-all"
                                >
                                    <IconButton href="https://de.linkedin.com">
                                        <Linkedin />
                                    </IconButton>
                                </div>

                                <div
                                    className="relative after:absolute after:bottom-0 after:left-0
                        after:h-px after:w-0 after:bg-primary
                        hover:after:w-full after:transition-all"
                                >
                                    <IconButton href="https://github.com/dh1542">
                                        <GithubDark />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
