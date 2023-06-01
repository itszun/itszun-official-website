import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function BlogLayout({ children }) {
    return (
        <>
            <Navbar />
            <Header />

            <div className="min-h-screen flex flex-col pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
                <div>{children}</div>
            </div>
            <Footer />
        </>
    );
}
