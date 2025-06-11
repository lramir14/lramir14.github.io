export const NavigationHeader = () => {
    return (
        <header className="bg-black text-white py-4 shadow-md sticky top-0 z-50">
            <nav className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <div className="text-lg font-bold">DataForge Portfolio</div>
                <ul className="flex gap-6 text-sm">
                    <li><a href="#about" className="hover:text-gray-400">About</a></li>
                    <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
                    <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
                    <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
                    <li><a href="#about" className="hover:text-gray-400">About Me</a></li>
                </ul>
            </nav>
        </header>
    );
};
