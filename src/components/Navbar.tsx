import { navlinks } from "@/lib/lib";
import Link from "next/link";


export default function Navbar() {
  return (
    <div className="w-full py-3">
        <div className=" w-[80%] mx-auto flex justify-between items-center">
            {/* logo */}
            <div>
                WorkYogi
            </div>
            <ul className=" flex justify-center items-center gap-8">
                {navlinks.map(link=>(
                    <li key={link.id}><Link href={link.url}>{link.name}</Link></li>
                ))}

            </ul>
            <div className="flex items-center justify-center gap-4">
                <button>Sign in</button>
                <button>Join</button>
            </div>
        </div>
      
    </div>
  )
}
