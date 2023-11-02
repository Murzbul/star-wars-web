'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import logo from "../../../../public/starWars.png";
import "./Navbar.css";

const Navbar = () =>
{
    const pathname = usePathname();

    return (
        <nav>
            <Image
                src={logo}
                alt="star-wars"
            />
            <div className={'links'}>
                <Link href="/" className={pathname === "/" ? 'active' : ""}>Home</Link>
                <Link href="/people" className={  pathname === "/people" ? 'active' : ""}>People</Link>
                <Link href="/starships" className={pathname === "/starships" ? 'active' : ""}>Starships</Link>
                <Link href="/films" className={pathname === "/films" ? 'active' : ""}>Films</Link>
                <Link href="/planets" className={pathname === "/planets" ? 'active' : ""}>Planets</Link>
            </div>
            <Link
              className="link-back"
              href="/"
            >
                APP
            </Link>
        </nav>
      );
};

export default Navbar;
