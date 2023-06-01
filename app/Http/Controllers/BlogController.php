<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function home(Request $request)
    {
        $posts = BlogPost::query()
            ->with('author')
            ->with('category')
            ->published()->select([
                'id', 'published_at', 'title', 'slug', 'excerpt', 'banner', 'blog_author_id', 'blog_category_id'
            ])->orderBy('published_at', 'desc');

        if ($request->category) {
            $posts->whereHas('category', function($q) use ($request) {
                $q->whereSlug($request->category);
            });
        }

        $posts = $posts->paginate(7);

        return Inertia::render('Home', [
            "posts" => $posts
        ]);
    }

    public function postDetail($year, $month, $slug)
    {
        $post = BlogPost::query()
            ->with('author')
            ->with('category')
            ->whereYear('published_at', $year)
            ->whereMonth('published_at', $month)
            ->whereSlug($slug)->firstOrFail();

        $published_at = $post->getOriginal('published_at');

        $prevPost = BlogPost::whereNotNull('published_at')
            ->orderBy('created_at', 'desc')
            ->where(function ($q) use ($post, $published_at) {
                $q->where('created_at', '<=', $post->created_at);
                $q->where('published_at', '<=', $published_at);
                $q->where('id', '!=', $post->id);
            })
            ->first();

        $nextPost = BlogPost::whereNotNull('published_at')
            ->orderBy('created_at', 'asc')
            ->where(function ($q) use ($post, $published_at) {
                $q->where('created_at', '>=', $post->created_at);
                $q->where('published_at', '>=', $published_at);
                $q->where('id', '!=', $post->id);
            })
            ->first();

        return Inertia::render('Post', [
            'post' => $post,
            'post.prevPost' => $prevPost,
            'post.nextPost' => $nextPost,
        ]);
    }
}
