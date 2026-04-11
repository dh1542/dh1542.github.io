import React, { ReactNode, Children } from 'react'

type TimeLineProps = {
    children: ReactNode
}

export function TimeLine({ children }: TimeLineProps) {
    const items = Children.toArray(children)

    return (
        <div className="relative mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div
                className="
          absolute top-0 bottom-0 left-4 w-[3px]
          rounded-full bg-gradient-to-b
          from-transparent via-primary/70 to-transparent
          z-0
          md:left-1/2 md:-translate-x-1/2
        "
            />

            <div className="relative flex flex-col gap-10 md:gap-16">
                {items.map((child, index) => {
                    const isLeft = index % 2 === 0

                    return (
                        <div
                            key={index}
                            className="
                relative grid grid-cols-[1fr] pl-12
                md:grid-cols-[1fr_80px_1fr] md:pl-0
                items-center
              "
                        >
                            <div
                                className={`
                  hidden md:block absolute top-1/2 h-px -translate-y-1/2 z-0
                  ${
                                    isLeft
                                        ? 'left-[calc(50%-max(40px,2.5rem))] w-[calc(50%-40px)] -translate-x-full bg-gradient-to-l from-primary/60 to-primary/10'
                                        : 'left-1/2 ml-[40px] w-[calc(50%-40px)] bg-gradient-to-r from-primary/60 to-primary/10'
                                }
                `}
                            />

                            <div className="relative z-20 md:hidden">
                                {child}
                            </div>

                            <div className="relative z-20 hidden md:flex md:justify-end">
                                {isLeft ? <div className="mr-8 max-w-md">{child}</div> : null}
                            </div>

                            <div className="hidden md:block" />

                            <div className="relative z-20 hidden md:flex md:justify-start">
                                {!isLeft ? <div className="ml-8 max-w-md">{child}</div> : null}
                            </div>

                            <span
                                className="
                  absolute top-1/2 left-4 h-3 w-3 -translate-x-1/2 -translate-y-1/2
                  rounded-full bg-primary z-10
                  md:left-1/2
                "
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}