import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-sm bg-black/50 border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* logo */}
                <div className="text-2xl font-display text-[--neon] font-extrabold">gappe</div>

                {/* Navigation Links */}
                <nav>
                    <Link href="#about" className="hover:text-[--neon] p-2 transition-colors">
                     About
                    </Link>
                    <Link href="#friends" className="hover:text-[--neon] p-2 transition-colors">
                    AI Friends
                    </Link>
                    <Link href="#contact" className="hover:text-[--neon] p-2 transition-colors">
                    Contact
                    </Link>
                </nav>
                {/* CTA Button */}
                <button className="px-4 py-2 rounded-full bg-[--neon] text-black font-semibold">
                    Start Chatting
                </button>
            </div>
        </header>
    );
}