import { ReactNode } from 'react'

type TimeLineProps = {
    children: ReactNode[]
}

export function TimeLine({ children }: TimeLineProps) {
    return (
        <div className="mt-52 h-100 w-1.5 border-popover border-[1.5px] bg-secondary rounded-full">
            {children}
        </div>
    )
}
