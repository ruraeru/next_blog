import Link from "next/link";

const navList = [
    { name: 'Home', href: '/blog' },
    { name: 'About', href: '/about' }
];

const localePathList = ['/about'];

export function Header() {
    return (
        <nav className="fixed">
            <div className="p-5 flex gap-5">
                {navList.map((navItem) => (
                    <Link
                        href={navItem.href}
                        key={navItem.name}
                    >
                        {navItem.name}
                    </Link>
                ))}
            </div>
        </nav>
    )
}