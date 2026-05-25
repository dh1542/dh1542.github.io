'use client';

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from '@heroui/navbar';
import Link from 'next/link';
import { useState } from 'react';
import IconButton from '@/components/IconButton';
import { GithubDark } from '@/components/ui/icons/logos';

const navItems = [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/#about' },
    { label: 'Education', href: '/#education' },
    { label: 'Work', href: '/#work' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Photography', href: '/photography' },
];

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className="sticky top-0 z-50
                bg-navbar
                backdrop-blur-sm
                backdrop-saturate-150
                border-b border-white/10 text-white
                shadow-lg shadow-black/30"
            height="10vh"
        >
            <NavbarContent justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    className="sm:hidden text-white"
                />

                <NavbarBrand>
                    <p className="font-bold text-xl antialiased font-serif text-primary">
                        Dominik Hoffmann
                    </p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-12" justify="end">
                {navItems.map((item) => (
                    <NavbarItem
                        key={item.href}
                        className="relative after:absolute after:bottom-0 after:left-0
                            after:h-px after:w-0 after:bg-primary
                            hover:after:w-full after:transition-all"
                    >
                        <Link href={item.href}>{item.label}</Link>
                    </NavbarItem>
                ))}

                <NavbarItem>
                    <IconButton href="https://github.com/dh1542/dh1542.github.io">
                        <GithubDark />
                    </IconButton>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu
                className="bg-navbar/95 pt-8
                    backdrop-blur-md
                    border-t border-white/10"
            >
                {navItems.map((item) => (
                    <NavbarMenuItem key={item.href}>
                        <Link
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block w-full py-3 text-lg text-white
                                hover:text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}

                <NavbarMenuItem>
                    <Link
                        href="https://github.com/dh1542/dh1542.github.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className="block w-full py-3 text-lg text-white
                            hover:text-primary transition-colors"
                    >
                        GitHub
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
