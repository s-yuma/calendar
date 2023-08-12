import Link from "next/link"

const style = {
    list: `border-2 border-white sm:pr-13 sm:pl-13 pr-5 pl-5 `
}
const Sidebar = () => {
    return(
        <>
            <nav className="hidden md:block h-456">
                <ul className="sm:flex flex-col space-y-1 sm:w-40 text-white text-center">
                    <li className={style.list}>
                        <Link href="/" >FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                </ul>
           </nav>
           <div className="block sm:hidden">

          
           <div className="dropdown" >
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" >
                    FILE
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <ul className="bg-red-400 sm:flex flex-col space-y-1 sm:w-40 text-white text-center">
                    <li className={style.list}>
                        <Link href="https://www.youtube.com/watch?v=tb3laKioVks&t=1022s" >FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                    <li className={style.list}>
                        <Link href="/">FILE</Link>
                    </li>
                </ul>
  </ul>
</div>
</div>
        </>
    )
}

export default Sidebar