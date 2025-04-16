import Link from "next/link"


function Navbar(){

    return (
        <header>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/events">Events</Link>
              <Link href="/about-us">About Us</Link>
            </nav>
          </header>
    )
}

export default Navbar