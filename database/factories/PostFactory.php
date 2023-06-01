<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Stephenjude\FilamentBlog\Models\Post;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class PostFactory extends Factory
{

    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->sentence();
        $slug = Str::slug($title);
        return [
            'title' => $title,
            'slug' => $slug,
            'excerpt' => fake()->text(50),
            'content' => fake()->realText(),
            'published_at' => now(),
        ];
    }
}
