<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Stephenjude\FilamentBlog\Models\Category;

class BlogCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::updateOrCreate([
            'slug' => "technology",
        ], [
            'name' => 'Technology',
            'description' => 'About Technology',
            'is_visible' => 1,
            'seo_title' => "technology",
            'seo_description' => "About Technology"
        ]);
    }
}
