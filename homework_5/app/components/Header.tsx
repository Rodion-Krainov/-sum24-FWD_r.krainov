import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/photos">Photos</Link>
                    </li>
                    <li>
                        <Link href="/comic">Comic</Link>
                    </li>
                    <li>
                        <Link href="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
