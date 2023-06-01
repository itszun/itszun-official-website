import menu from "@/Config/menu.json";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const { header } = menu;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="w-full container mx-auto">
                <div className="flex flex-col items-center py-12">
                    <a
                        className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl"
                        href="/"
                    >
                        Itszun
                    </a>
                    <p className="text-lg text-gray-600">Welcome to My Blog</p>
                </div>
            </header>

            <nav
                className="w-full py-4 border-t border-b bg-gray-100"
                x-data="{ open: false }"
            >
                <div className="block sm:hidden">
                    <a
                        href="#"
                        className="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center py-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Topics  <span className="ml-2">{isOpen ? (
                            <FontAwesomeIcon icon={faChevronUp}/>
                        ) : (
                            <FontAwesomeIcon icon={faChevronDown}/>
                        )}</span>
                    </a>
                </div>
                <div className={"w-full flex-grow sm:flex sm:items-center sm:w-auto transition-all " + (isOpen ? "block" : "hidden")}>
                    <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                        {header &&
                            header.map((v, k) => (
                                <Link key={k}
                                    href={v.url}
                                    className="hover:bg-gray-400 rounded py-2 px-4 mx-2"
                                >
                                    {v.name}
                                </Link>
                            ))}
                    </div>
                </div>
            </nav>
        </>
    );
}
