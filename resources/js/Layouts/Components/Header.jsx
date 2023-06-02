import menu from "@/Config/menu.json";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const { header } = menu;
    const topics = usePage().props.topics;
    const [isOpen, setIsOpen] = useState(false);

    console.log("topics ",topics);

    return (
        <div className="dark:bg-gray-900 ">
            <header className="w-full container mx-auto">
                <div className="flex flex-col items-center py-12">
                    <a
                        className="font-bold uppercase text-gray-800 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300 text-5xl"
                        href="/"
                    >
                        Itszun
                    </a>
                    <p className="text-lg text-gray-500">Welcome to My Blog</p>
                </div>
            </header>

            <nav
                className="w-full py-4 border-t border-b dark:border-blue-900 bg-gray-100 dark:bg-blue-950 dark:text-white"
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
                        {topics &&
                            topics.map((v, k) => (
                                <Link key={k}
                                    href={"/?category=" + v.slug}
                                    className="hover:bg-gray-400 rounded py-2 px-4 mx-2"
                                >
                                    {v.name}
                                </Link>
                            ))}
                    </div>
                </div>
            </nav>
        </div>
    );
}
