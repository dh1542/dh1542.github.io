import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@heroui/navbar";
import Link from "next/link";
import {Button} from "@heroui/button";

export default function NavBar() {
    return(
        <Navbar height={"10vh"}>
            <NavbarBrand >
                <p className="font-bold text-inherit">Dominik Hoffmann</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-12" justify="end">
                <NavbarItem>
                    <Link aria-current="page" href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link aria-current="page" href="#">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link aria-current="page" href="#">
                        Work
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )

}