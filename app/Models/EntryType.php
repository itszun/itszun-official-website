<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EntryType extends Model
{
    use HasFactory;

    protected $guarded = ["id"];

    public function scopeIdOfname($q, $name) {
        $q->where('name', $name)->orWhere('slug', $name)->first();
    }
}
