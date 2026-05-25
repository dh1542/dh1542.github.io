'use client';

import TypeWriter from '@/components/TypeWriter';
import ProfilePicture from '@/components/ProfilePicture';
import { Button } from '@/components/ui/button';
import { Linkedin, GithubDark } from '@/components/ui/icons/logos';
import IconButton from '@/components/IconButton';

export default function HeroSection() {
    const completions = [
        'curious by nature.',
        'architecturally minded.',
        'strategically focused.',
        'a collaborative team player.',
    ];

    return (
        <section
            id="home"
            className="w-full px-4 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32"
        >
            <div className="mx-auto w-full max-w-6xl">
                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr] md:gap-12">
                    <div className="flex justify-center md:justify-start">
                        <ProfilePicture imageLink="./baltimore_oriole.jpg" />
                    </div>

                    <div className="flex flex-col gap-4 text-primary text-center md:text-left">
                        <TypeWriter
                            staticText="Hey, I am "
                            completions={completions}
                        />

                        <div className="flex flex-col gap-4">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                                Dominik Hoffmann
                            </h2>

                            <div className="text-base leading-relaxed text-gray-500 sm:text-lg lg:text-xl">
                                <p>
                                    I’m a developer focused on React and Spring
                                    Boot, building clean and scalable web
                                    applications. Curious by nature, I’m always
                                    learning and expanding my skill set.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:flex-wrap sm:items-center">
                                <Button
                                    onClick={() => console.log('HELLO')}
                                    className="w-full sm:w-auto"
                                >
                                    Contact me
                                </Button>

                                <div className="flex items-center justify-center gap-4 md:justify-start">
                                    <div
                                        className="relative after:absolute after:bottom-0 after:left-0
                    after:h-px after:w-0 after:bg-primary
                    after:transition-all hover:after:w-full"
                                    >
                                        <IconButton href="https://de.linkedin.com/in/dominik-hoffmann-735148409">
                                            <Linkedin />
                                        </IconButton>
                                    </div>

                                    <div
                                        className="relative after:absolute after:bottom-0 after:left-0
                    after:h-px after:w-0 after:bg-primary
                    after:transition-all hover:after:w-full"
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
        </section>
    );
}
