import { site } from "@/Config/config.json";

export default function Footer() {

    return (
        <footer className="w-full border-t bg-white pb-12">
            {/* <div
                className="relative w-full flex items-center invisible md:visible md:pb-12"
                x-data="getCarouselData()"
            >
                <button
                    className="absolute bg-blue-800 hover:bg-blue-700 text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 ml-12"
                    x-on:click="decrement()"
                >
                    &#8592;
                </button>
                <template x-for="image in images.slice(currentIndex, currentIndex + 6)">
                    <img className="w-1/6 hover:opacity-75" src="image" />
                </template>
                <button
                    className="absolute right-0 bg-blue-800 hover:bg-blue-700 text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 mr-12"
                    x-on:click="increment()"
                >
                    &#8594;
                </button>
            </div> */}
            <div className="w-full container mx-auto flex flex-col items-center">
                <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
                    <a href="#" className="uppercase px-3">
                        About Us
                    </a>
                    <a href="#" className="uppercase px-3">
                        Privacy Policy
                    </a>
                    <a href="#" className="uppercase px-3">
                        Terms & Conditions
                    </a>
                    <a href="#" className="uppercase px-3">
                        Contact Us
                    </a>
                </div>
                <div className="uppercase pb-6">{site.copyright_year} &copy; {site.copyright_domain}</div>
            </div>
        </footer>
    );
}
