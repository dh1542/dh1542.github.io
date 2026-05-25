'use client';
import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from '@/components/magicui/terminal';

export default function AboutSection() {
    return (
        <div
            className="pt-52 flex flex-col justify-center items-center"
            id="about"
        >
            <div>
                <Terminal className="w-200">
                    <span className="text-red-500">
                        /opt/dh1542.github.io ---&gt;
                    </span>
                    <TypingAnimation className="text-white">
                        &gt;&gt; ll
                    </TypingAnimation>
                    <AnimatedSpan delay={1000} className="text-white">
                        <span>
                            r-x------ 1 dh1542 dh1542 4.0K Dec 2 2024 README.md
                        </span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={1000} className="text-white">
                        <span>
                            r-x------ 1 dh1542 dh1542 4.0K Dec 2 2024{' '}
                            <span className="font-bold text-blue-500">
                                skills
                            </span>
                        </span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={1000} className="text-white">
                        <span>
                            r-x------ 1 dh1542 dh1542 4.0K Dec 2 2024{' '}
                            <span className="font-bold text-blue-500">
                                work_experience
                            </span>
                        </span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={1000} className="text-white">
                        <span>
                            r-x------ 1 dh1542 dh1542 4.0K Dec 2 2024{' '}
                            <span className="font-bold text-blue-500">
                                projects
                            </span>
                        </span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={1000} className="text-red-500">
                        /opt/dh1542.github.io ---&gt;
                    </AnimatedSpan>
                    <TypingAnimation delay={2000} className="text-white">
                        &gt;&gt; cat README.md
                    </TypingAnimation>
                    <AnimatedSpan delay={3000} className="text-white">
                        <span>
                            Welcome to my portfolio website! I am Dominik.
                            <br />{' '}
                        </span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={3000} className="text-red-500">
                        /opt/dh1542.github.io ---&gt;
                    </AnimatedSpan>
                    <TypingAnimation delay={4000} className="text-white">
                        &gt;&gt; cat ./skills/skill_list.txt
                    </TypingAnimation>
                    <AnimatedSpan delay={6000} className="text-white">
                        <ol>
                            <li>Java (Spring Boot, JakartaEE)</li>
                            <li>React</li>
                            <li>Vue.js</li>
                            <li>Databases</li>
                            <li>Docker</li>
                            <li>Kubernetes</li>
                            <li>Go</li>
                            <li>.....</li>
                        </ol>
                    </AnimatedSpan>
                    <AnimatedSpan delay={6000} className="text-red-500">
                        /opt/dh1542.github.io ---&gt;
                    </AnimatedSpan>
                    <TypingAnimation delay={7000} className="text-white">
                        &gt;&gt; cat ./work_experience/work.txt
                    </TypingAnimation>
                    <AnimatedSpan delay={9000} className="text-white">
                        <ol>
                            <li>
                                Gained four years of hands-on experience as a
                                working student
                            </li>
                            <li>
                                at ISO-Gruppe, contributing to real-world
                                software projects
                            </li>
                            <li>alongside my studies.</li>
                            <li>
                                <br />
                            </li>
                            <li>
                                Transitioned into a full-time role as a
                                Development Consultant
                            </li>
                            <li>
                                in May 2026, working on software solutions for
                                Germany’s public
                            </li>
                            <li>sector.</li>
                        </ol>
                    </AnimatedSpan>
                </Terminal>
            </div>
        </div>
    );
}
