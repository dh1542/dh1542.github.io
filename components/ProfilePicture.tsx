"use client";
import {Image} from "@heroui/react";

interface ProfilePictureProps {
    imageLink: string;
}


export default function ProfilePicture({imageLink}: ProfilePictureProps) {
    return(
        <div className="w-64 h-64 rounded-full overflow-hidden border-3 border-white-1000">
            <Image
                src={imageLink}
                alt="profile-pic"
                width={256}
                height={256}
                className="object-cover"
            />
        </div>
    );
}