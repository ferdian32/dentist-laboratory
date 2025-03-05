import { Link } from "react-router-dom"
import { nax03_ } from "../lib/data"
export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-slate-50 text-black shadow-lg py-4 px-20">
      <Link>
        <img src="/images/logo.jpg" alt="image" className="w-10 h-10" />
      </Link>
      <ul className="flex">
        {nax03_ && nax03_.map((__) => {
          return (
            <li key={__.name} className="px-3 cursor-pointer"><Link to={__.path}>{__.name}</Link></li>
          )
        })}
      </ul>
    </nav>
  )
} 