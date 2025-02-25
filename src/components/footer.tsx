import Link from "next/link"
import path from "path"

const routes =[
    {
        name: "Terms & Conditions",
        path: "/terms-conditions",
    },
    {
        name: "Privacy Policy",
        path: "/privacy-policy",
    }, 
]

export default function Footer() {
  return (
    <footer className="mt-auto flex justify-between items-center h-16 border-white-[10%] px-3 sm:px-9 text-xs text-white/25">
        <small className="text-xs " >&copy; 2024  Samm. All Rights Reserved</small>
    <ul className="flex gap-x-3 sm:gap-x-8" >{
        routes.map((route) => (
            <li key={route.path} className="hover:text-white transition">
                <Link href={route.path}>
                    {route.name}
                </Link>
            </li> 
            ))}
        </ul>
    </footer>
  ) 
}
