import { Link, Head } from "@inertiajs/react";
import BlogLayout from "@/Layouts/BlogLayout";
import Sidebar from "@/Layouts/Components/Sidebar";
import Posts from "@/Layouts/Partials/Posts";

export default function Home({ auth, laravelVersion, phpVersion, posts }) {
    return (
        <BlogLayout>
            <Head title="Welcome" />
            <div className="container mx-auto flex justify-center flex-wrap py-6">
                {/* <!-- Posts Section --> */}
                <Posts posts={posts}/>
                {/* <!-- Sidebar Section --> */}
                {/* <Sidebar /> */}
            </div>
        </BlogLayout>
    );
}
