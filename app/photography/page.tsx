'use client';

import Gallery from '@/components/ui/gallery';
import NavBar from '@/components/Navbar';

const gallerySections = [
    {
        images: [
            {
                src: '/gallery/Tiger.jpg',
                alt: 'Tiger Nuremberg',
            },
        ],
    },
    {
        images: [
            {
                src: '/gallery/Ziesel.jpg',
                alt: 'Ziesel Nuremberg',
            },
        ],
    },
    {
        images: [
            {
                src: '/gallery/Galata_Bridge.jpg',
                alt: 'Galata Bridge, Istanbul',
            },
        ],
    },
    {
        images: [
            {
                src: '/gallery/Geiss.jpg',
                alt: 'Geissbock Nuremberg',
            },
        ],
    },
    {
        images: [
            {
                src: '/gallery/Prag_bei_Nacht.jpg',
                alt: 'Prague Hrady',
            },
        ],
    },
    {
        images: [
            {
                src: '/gallery/Pinguin.jpg',
                alt: 'Penguine Nuremberg',
            },
        ],
    },
];

export default function Photography() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center bg-background dark">
            <div className="w-full">
                <NavBar />
            </div>
            <div>
                <Gallery sections={gallerySections} />
            </div>
        </div>
    );
}
