export default function InstagramFeeds() {
    return (
        <div className="w-full bg-white dark:bg-gray-800 shadow flex flex-col my-4 p-6">
            <p className="text-xl dark:text-white font-semibold pb-5">Instagram</p>
            <div className="grid grid-cols-3 gap-3">
                <img
                    className="hover:opacity-75"
                    src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
                />
                <img
                    className="hover:opacity-75"
                    src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
                />
                <img
                    className="hover:opacity-75"
                    src="https://source.unsplash.com/collection/1346951/150x150?sig=3"
                />
                <img
                    className="hover:opacity-75"
                    src="https://source.unsplash.com/collection/1346951/150x150?sig=4"
                />
                <img
                    className="hover:opacity-75"
                    src="https://source.unsplash.com/collection/1346951/150x150?sig=5"
                />
                <img
                    className="hover:opacity-75"
                    src="https://source.unsplash.com/collection/1346951/150x150?sig=6"
                />
                <img
                    className="hover:opacity-75"
                    src="https://source.unsplash.com/collection/1346951/150x150?sig=7"
                />
                <img
                    className="hover:opacity-75"
                    src="https://source.unsplash.com/collection/1346951/150x150?sig=8"
                />
                <img
                    className="hover:opacity-75"
                    src="https://source.unsplash.com/collection/1346951/150x150?sig=9"
                />
            </div>
            <a
                href="#"
                className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6"
            >
                <i className="fab fa-instagram mr-2"></i> Follow @dgrzyb
            </a>
        </div>
    );
}
