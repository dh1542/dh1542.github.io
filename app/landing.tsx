"use client";

import NavBar from "@/components/Navbar";
import {Container} from "postcss";
import {useState} from "react";
import TypeWriter from "@/components/TypeWriter";
import ProfilePicture from "@/components/ProfilePicture";

export default function Landing(){

    const completions = ["a kicker god", "a G von hinten"]


    return (
        <>
            <NavBar></NavBar>
            <div className="h-lvh w-lvh flex items-center justify-center w-full lg:w-lvh">
                <div className="grid grid-cols-2 gap-1">
                    <ProfilePicture imageLink={"./baltimore_oriole.jpg"}/>
                    <div className="flex flex-col gap-4">
                        <TypeWriter staticText={"Hi, I am "} completions={completions}/>
                        <div className="flex flex-col gap-2 w-150 h-150">
                            <h2 className="text-10xl md:text-4xl font-bold tracking-tight"> Dominik Hoffmann </h2>
                            <div className="text-lg md:text-xl">
                                <p>
                                    Always learning and interested to build something new!
                                </p>


                            </div>
                        </div>
                    </div>




                </div>
            </div>

        </>

    )
}