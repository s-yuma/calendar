
import Link from "next/link";
import { IconName, WiAlien } from "react-icons/wi";
const Header = () => {
    return(
        <>
            <header className="sm:flex text-white bg-sky-500">
                <div className="text-5xl flex text-white sm:ml-2 ml-12 ">
                    <WiAlien />
                    <h1>Cotton</h1>
                </div>
                <div className="sm:text-3xl sm:ml-40  sm:space-x-10 sm:pt-2 text-1xl space-x-1">
                    <Link href="/">FILE</Link>
                    <Link href="/">VIEW</Link>
                    <Link href="/">OVERLAYS</Link>
                    <Link href="/">AISPEED</Link>
                    <Link href="/">TMT</Link>
                    <Link href="/">INJETCTS MSSV</Link>
                    <Link href="/">CONTROL AI</Link>

                </div>
            
            </header>
        </>
    )
}

export default Header