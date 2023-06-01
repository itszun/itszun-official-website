import { Link } from "@inertiajs/react";
import PostCategory from "@/Components/PostCategory";

export default function PostCard({ data }) {
    const {
        banner,
        banner_url,
        detail_page_url,
        blog_category_id,
        content,
        created_at,
        excerpt,
        id,
        published_at,
        slug,
        title,
        updated_at,
        category,
        author,
    } = data;

    return (
        <article className="flex flex-col shadow my-4 w-full">
            {banner && (
                <Link href={detail_page_url} className="hover:opacity-75">
                    <img src={banner_url} />
                    {/* <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" /> */}
                </Link>
            )}
            <div className="bg-white flex flex-col justify-start p-6">
                <PostCategory category={category}/>

                <Link
                    href={detail_page_url}
                    className="text-3xl font-bold hover:text-gray-700 pb-4"
                >
                    {title}
                </Link>
                <p href={detail_page_url} className="text-sm pb-3">
                    By{" "}
                    <a href="#" className="font-semibold hover:text-gray-800">
                        {author.name}
                    </a>
                    , Published on {published_at}
                </p>
                <Link href="#" className="pb-6">
                    {excerpt}
                </Link>
                <Link
                    href={detail_page_url}
                    className="uppercase text-gray-800 hover:text-black"
                >
                    Continue Reading <i className="fas fa-arrow-right"></i>
                </Link>
            </div>
        </article>
    );
}
