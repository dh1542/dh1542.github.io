import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar'
import Link from 'next/link'
import IconButton from '@/components/IconButton'
import { GithubDark } from '@/components/ui/svgs/githubDark'

export default function NavBar() {
    return (
        <Navbar
            className="sticky top-0
                bg-navbar
                backdrop-blur-sm
                backdrop-saturate-150
                border-b border-white/10 text-white
                shadow-lg shadow-black/30"
            height={'10vh'}
        >
            <NavbarContent justify="start">
                <NavbarBrand>
                    <p className="font-bold text-inherit text-xl antialiased font-serif">
                        Dominik Hoffmann
                    </p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-12" justify="end">
                <NavbarItem
                    className="relative after:absolute after:bottom-0 after:left-0
                        after:h-px after:w-0 after:bg-primary
                        hover:after:w-full after:transition-all"
                >
                    <Link aria-current="page" href="#home">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem
                    className="relative after:absolute after:bottom-0 after:left-0
                        after:h-px after:w-0 after:bg-primary
                        hover:after:w-full after:transition-all"
                >
                    <Link aria-current="page" href="#about">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem
                    className="relative after:absolute after:bottom-0 after:left-0
                        after:h-px after:w-0 after:bg-primary
                        hover:after:w-full after:transition-all"
                >
                    <Link aria-current="page" href="#education">
                        Education
                    </Link>
                </NavbarItem>
                <NavbarItem
                    className="relative after:absolute after:bottom-0 after:left-0
                        after:h-px after:w-0 after:bg-primary
                        hover:after:w-full after:transition-all"
                >
                    <Link aria-current="page" href="#work">
                        Work
                    </Link>
                </NavbarItem>
                <NavbarItem
                    className="relative after:absolute after:bottom-0 after:left-0
                        after:h-px after:w-0 after:bg-primary
                        hover:after:w-full after:transition-all"
                >
                    <Link aria-current="page" href="#projects">
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem
                    className="relative after:absolute after:bottom-0 after:left-0
                        after:h-px after:w-0 after:bg-primary
                        hover:after:w-full after:transition-all"
                >
                    <IconButton
                        href={'https://github.com/dh1542/dh1542.github.io'}
                    >
                        <GithubDark />
                    </IconButton>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
