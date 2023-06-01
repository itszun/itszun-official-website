<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Stephenjude\FilamentBlog\Models\Category as FilamentBlogCategory;

class BlogCategory extends FilamentBlogCategory
{
    protected $hidden = ["id"];
}
