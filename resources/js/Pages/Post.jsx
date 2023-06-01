import { Head } from "@inertiajs/react";
import BlogLayout from "@/Layouts/BlogLayout";
import Sidebar from "@/Layouts/Components/Sidebar";
import PostDetail from "@/Layouts/Partials/PostDetail";

export default function Post({ auth, post }) {
    return (
        <BlogLayout>
            <div className="container mx-auto flex flex-wrap py-6">
                <PostDetail post={post} />
                <Sidebar />
            </div>
        </BlogLayout>
    );
}
