<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Stephenjude\FilamentBlog\Models\Author;

class BlogAuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Author::updateOrCreate([
            "email" => "malikaljun44@gmail.com"
        ], [
            "name" => "Abdul Malik Aljun",
            "bio" => "Programming & Art is not separable. It's a whole. In order to know freedom (art), we should know system (programming)",
        ]);
    }
}
