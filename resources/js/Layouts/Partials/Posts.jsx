import PostCard from "./PostCard";
import { Link } from "@inertiajs/react";
import { Parser } from "html-to-react";

export default function Posts({ posts }) {
    const {
        current_page,
        per_page,
        data,
        first_page_url,
        last_page_url,
        prev_page_url,
        next_page_url,
        from,
        to,
        total,
        links,
    } = posts;
    console.log(posts);

    return (
        <section className="w-full md:w-2/3 flex flex-col items-center px-3 dark:text-white">
            {total ? data.map((v, k) => <PostCard key={k} data={v} />) : (
                <div className="h-96 flex items-center">
                    No published post
                </div>
            )}
            {links && (
                <div className="flex items-center py-8">
                    {links.map((v, k) => (
                        <Link
                            key={k}
                            href={v.url}
                            className={
                                v.active
                                    ? "h-10 w-10 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center bg-blue-800"
                                    : "h-10 w-10 font-semibold text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center"
                            }
                        >
                            {Parser().parse(v.label)}
                        </Link>
                    ))}
                </div>
            )}
        </section>
    );
}
