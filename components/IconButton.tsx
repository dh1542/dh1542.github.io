import { Button } from '@/components/ui/button'
import { ReactNode } from 'react'
import Link from 'next/link'

export type IconButtonProps = {
    children: ReactNode
    href: string
}

export default function IconButton({ children, href }: IconButtonProps) {
    return (
        <Button
            size="icon-lg"
            className="bg-transparent border-none shadow-none hover:bg-transparent focus-visible:ring-0"
            variant="secondary"
        >
            <Link href={href} rel="noopener noreferrer" target="_blank">
                {children}
            </Link>
        </Button>
    )
}
