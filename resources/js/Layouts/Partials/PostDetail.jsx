import { Head } from "@inertiajs/react";
import PostCategory from "@/Components/PostCategory";
import RichContent from "@/Components/RichContent";
import AuthorCard from "@/Layouts/Components/AuthorCard";


export default function PostDetail({ post }) {
    const {
        content,
        title,
        excerpt,
        published_at,
        detail_page_url,
        banner,
        banner_url,
        nextPost,
        prevPost,
        author,
    } = post;


    console.log(post.category);

    return (
        <section className="w-full m-auto lg:w-2/3 flex flex-col items-center px-3">
            <Head>
                <title>{title}</title>
                <link rel="canonical" href={detail_page_url}/>
                <meta name="description" content={excerpt} />
                <meta name="author" content={author.name}></meta>
            </Head>
            <article className="flex flex-col shadow my-4 w-full">
                {banner && (
                    <a href="#" className="hover:opacity-75">
                        <img src={banner_url} />
                    </a>
                )}
                <div className="bg-white  dark:bg-gray-800 dark: text-white flex flex-col justify-start p-6">
                    <PostCategory category={post.category}/>
                    <a
                        href="#"
                        className="text-3xl font-bold hover:text-gray-700 pb-4"
                    >
                        {title}
                    </a>
                    <p href="#" className="text-sm pb-8">
                        By{" "}
                        <a
                            href="#"
                            className="font-semibold hover:text-gray-800"
                        >
                            {author.name}
                        </a>
                        , Published on {published_at}
                    </p>
                    <hr />
                    <div className="pt-6 rich-content">
                        <RichContent html={content}/>
                    </div>
                </div>
            </article>

            <div className="w-full flex pt-6">
                {prevPost && (
                    <a
                        href={prevPost.detail_page_url}
                        className="w-1/2 bg-white dark:bg-gray-800 dark:text-white shadow hover:shadow-md text-left p-6"
                    >
                        <p className="text-lg text-blue-800 font-bold flex items-center">
                            <i className="fas fa-arrow-left pr-1"></i> Previous
                        </p>
                        <p className="pt-2">{prevPost.title}</p>
                    </a>
                )}
                {nextPost && (
                    <a
                        href={nextPost.detail_page_url}
                        className="w-1/2 bg-white dark:bg-gray-800 dark:text-white shadow hover:shadow-md text-right p-6"
                    >
                        <p className="text-lg text-blue-800 font-bold flex items-center justify-end">
                            Next <i className="fas fa-arrow-right pl-1"></i>
                        </p>
                        <p className="pt-2">{nextPost.title}</p>
                    </a>
                )}
            </div>
            <AuthorCard author={author}/>
        </section>
    );
}
