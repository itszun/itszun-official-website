import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faGithub,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import PostCategory from "@/Components/PostCategory";
import RichContent from "@/Components/RichContent";


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
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
            <Head>
                <title>{title}</title>
                <link rel="canonical" href={detail_page_url}/>
                <meta name="description" content={excerpt} />
                <meta name="author" content={author.name}></meta>
            </Head>
            <article className="flex flex-col shadow my-4">
                {banner && (
                    <a href="#" className="hover:opacity-75">
                        <img src={banner_url} />
                    </a>
                )}
                <div className="bg-white flex flex-col justify-start p-6">
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
                        className="w-1/2 bg-white shadow hover:shadow-md text-left p-6"
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
                        className="w-1/2 bg-white shadow hover:shadow-md text-right p-6"
                    >
                        <p className="text-lg text-blue-800 font-bold flex items-center justify-end">
                            Next <i className="fas fa-arrow-right pl-1"></i>
                        </p>
                        <p className="pt-2">{nextPost.title}</p>
                    </a>
                )}
            </div>

            {author && (
                <div className="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-10 mb-10 p-6">
                    <div className="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
                        {author.photo && (
                            <img
                                src={author.photo_url}
                                className="rounded-full shadow h-32 w-32 object-cover"
                            />
                        )}
                    </div>
                    <div className="flex-1 flex flex-col justify-center md:justify-start">
                        <p className="font-semibold text-2xl">
                            {author.name}
                        </p>
                        <p className="pt-2">{author.bio}</p>
                        <div className="flex items-center justify-center md:justify-start text-2xl no-underline text-blue-800 pt-4">
                            {author.facebook_handle && (
                                <a
                                    className="pr-4"
                                    href={author.facebook_handle}
                                >
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            )}
                            {author.linkedin_handle && (
                                <a
                                    className="pr-4"
                                    href={author.linkedin_handle}
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            )}
                            {author.github_handle && (
                                <a
                                    className="pr-4"
                                    href={author.github_handle}
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            )}
                            {author.twitter_handle && (
                                <a
                                    className="pr-4"
                                    href={author.twitter_handle}
                                >
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
