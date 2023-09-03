import Link from "next/link"
export default function Header() {
  return (
    <nav>
        <ul className="flex p-4 bg-slate-800 justify-center">
            <Link className="font-bold px-3 text-xl from-neutral-400 hover:underline" href={"/"}>Home</Link>
            <Link className="font-bold px-3 text-xl from-neutral-400 hover:underline" href={"/Products"}>Products</Link>
        </ul>
    </nav>
  )
}
