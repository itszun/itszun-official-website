<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Stephenjude\FilamentBlog\Models\Author as FilamentBlogAuthor;

class BlogAuthor extends FilamentBlogAuthor
{
    protected $hidden = ["id"];
}
