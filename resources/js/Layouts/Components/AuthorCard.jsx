import RichContent from "@/Components/RichContent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faGithub,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";


export default function AuthorCard({author}) {
    return author && (
        <div className="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white dark:bg-gray-800 dark:text-white mt-10 mb-10 p-6">
            <div className="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
                {author.photo && (
                    <img
                        src={author.photo_url}
                        className="rounded-full shadow h-32 w-32 object-cover"
                    />
                )}
            </div>
            <div className="flex-1 flex flex-col justify-center md:justify-start ml-2">
                <p className="font-semibold text-2xl">
                    {author.name}
                </p>
                <p className="pt-2">
                    <RichContent html={author.bio}/>
                </p>
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
    )
}
