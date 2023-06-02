<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Stephenjude\FilamentBlog\Models\Post as FilamentBlogPost;

class BlogPost extends FilamentBlogPost
{
    use HasSlug;
    /**
     * @var array<string, string>
     */
    protected $casts = [
        'published_at' => 'datetime:d M, Y',
    ];

    /**
     * @var array<string>
     */
    protected $appends = [
        'banner_url', 'detail_page_url'
    ];

    protected $hidden = [
        "id"
    ];

    /**
     * Get the options for generating the slug.
     */
    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function getDetailPageUrlAttribute() {
        return route('post.detail', [
            "year" => $this->getOriginal('published_at')->format('Y'),
            "month" => $this->getOriginal('published_at')->format('m'),
            "slug" => $this->slug
        ]);
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(BlogAuthor::class, 'blog_author_id');
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(BlogCategory::class, 'blog_category_id');
    }

    public function scopePublished(Builder $query)
    {
        return $query->whereNotNull('published_at')->where('published_at', '<', now()->format('Y-m-d'));
    }
}
