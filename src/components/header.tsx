"use client";

import Link from "next/link";
import Logo from "./Logo";
import path from "path";
import { usePathname } from "next/navigation";
import { text } from "stream/consumers";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const routes = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "All Events",
        path: "/events/all",
    },
];
export default function Header() {
    const activePathName = usePathname();
    return (
        <header className="flex justify-between h-20 px-3 sm :px-9 items-center border-b border-white/10" >
            <Logo />
            <nav className="h-full" >
                <ul className="flex gap-x-6 text-sm  h-full" >
                    {
                        routes.map((route) => (
                            <li key={route.path} className={cn("hover:text-white  h-full flex items-center relative transition",
                            {
                                "text-white": activePathName === route.path,
                                "text-white/50": activePathName !== route.path,
                            })}>
                                <Link href={route.path}>
                                    {route.name}
                                </Link>
                                {
                                    route.path === activePathName && (
                                        <motion.div layoutId="header-active-nav"
                                        className="bg-accent h-1 w-full absolute bottom-0"></motion.div>
                                    )
                                }
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}
