import { Link } from "@inertiajs/react";

export default function PostCategory({category}) {
    return (category) ? (
        <Link
            href={`/?category=${category.slug}`}
            className="text-blue-700 text-sm font-bold uppercase pb-4"
        >
            {category.name}
        </Link>
    ) : "";
}
