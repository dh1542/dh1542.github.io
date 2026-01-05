import { ReactNode } from 'react'

type TimeLineProps = {
    children: ReactNode[]
}

export function TimeLine({ children }: TimeLineProps) {
    return (
        <div className="relative mt-16 w-full">
            <div
                className="
                    absolute left-1/2 top-0 h-full w-[3px]
                    -translate-x-1/2 rounded-full
                    bg-gradient-to-b
                    from-transparent
                    via-secondary/70
                    to-transparent
                    z-10
                  "
            />
            <div className="flex flex-col gap-16 w-[50vw]">
                {children.map((child, index) => {
                    const isLeft = index % 2 === 0

                    return (
                        <div
                            key={index}
                            className="relative grid grid-cols-[1fr_auto_1fr] items-center z-2"
                        >
                            {/* left */}
                            <div className="flex justify-start z-3">
                                {isLeft && <span>{child} </span>}
                            </div>

                            <div className="relative flex justify-center">
                                <span className="flex relative justify-center h-3 w-3 rounded-full bg-secondary" />
                            </div>

                            <div
                                className={`
                                    absolute top-1/2 h-px
                                    ${
                                        isLeft
                                            ? 'right-1/2 w-[40vw] bg-gradient-to-l from-secondary/60 to-secondary/10 z-0'
                                            : 'left-1/2 w-[40vw] bg-gradient-to-r from-secondary/60 to-secondary/10 z-0'
                                    }
                                  `}
                            />

                            {/* right */}
                            <div className="flex justify-end z-3">
                                {!isLeft && <span>{child}</span>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
