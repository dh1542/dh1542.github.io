'use client';

import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from '@/components/magicui/terminal';

const prompt = '/opt/dh1542.github.io --->';

const directories = ['skills', 'work_experience', 'projects'];

const skills = [
    'Java (Spring Boot, JakartaEE)',
    'React',
    'Vue.js',
    'Databases',
    'Docker',
    'Kubernetes',
    'Go',
    '.....',
];

const workExperience = [
    'Gained four years of hands-on experience as a working student',
    'at ISO-Gruppe, contributing to real-world software projects',
    'alongside my studies.',
    '',
    'Transitioned into a full-time role as a Development Consultant',
    'in May 2026, working on software solutions for Germany’s public',
    'sector.',
];

export default function AboutSection() {
    return (
        <div
            className="pt-52 flex flex-col justify-center items-center"
            id="about"
        >
            <Terminal className="w-full max-w-5xl">
                <AnimatedSpan className="text-red-500">{prompt}</AnimatedSpan>

                <TypingAnimation className="text-white">
                    &gt;&gt; ll
                </TypingAnimation>

                <AnimatedSpan delay={1000} className="text-white">
                    <span>
                        r-x------ 1 dh1542 dh1542 4.0K Dec 2 2024 README.md
                    </span>
                </AnimatedSpan>

                {directories.map((directory) => (
                    <AnimatedSpan
                        key={directory}
                        delay={1000}
                        className="text-white"
                    >
                        <span>
                            r-x------ 1 dh1542 dh1542 4.0K Dec 2 2024{' '}
                            <span className="font-bold text-blue-500">
                                {directory}
                            </span>
                        </span>
                    </AnimatedSpan>
                ))}

                <AnimatedSpan delay={1000} className="text-red-500">
                    {prompt}
                </AnimatedSpan>

                <TypingAnimation delay={2000} className="text-white">
                    &gt;&gt; cat README.md
                </TypingAnimation>

                <AnimatedSpan delay={3000} className="text-white">
                    <span>
                        Welcome to my portfolio website! I am Dominik.
                        <br />
                    </span>
                </AnimatedSpan>

                <AnimatedSpan delay={3000} className="text-red-500">
                    {prompt}
                </AnimatedSpan>

                <TypingAnimation delay={4000} className="text-white">
                    &gt;&gt; cat ./skills/skill_list.txt
                </TypingAnimation>

                <AnimatedSpan delay={6000} className="text-white">
                    <ol>
                        {skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ol>
                </AnimatedSpan>

                <AnimatedSpan delay={6000} className="text-red-500">
                    {prompt}
                </AnimatedSpan>

                <TypingAnimation delay={7000} className="text-white">
                    &gt;&gt; cat ./work_experience/work.txt
                </TypingAnimation>

                <AnimatedSpan delay={9000} className="text-white">
                    <ol>
                        {workExperience.map((line, index) =>
                            line === '' ? (
                                <li key={index}>
                                    <br />
                                </li>
                            ) : (
                                <li key={index}>{line}</li>
                            )
                        )}
                    </ol>
                </AnimatedSpan>
            </Terminal>
        </div>
    );
}
