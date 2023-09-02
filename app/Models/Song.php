<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Song extends Entry
{
    use HasFactory;

    protected $table = "entries";

    protected $guarded = ["id"];

    protected static function booted() {
        if (auth()->check()) {
            static::addGlobalScope('song', function (Builder $builder) {
                $builder->whereHas('entry_type', fn($q) => $q->where('slug', 'song'));
            });
   
            static::creating(function ($model) {
                $model->entry_type_id = optional(EntryType::where('slug','song')->first())->id;
            });
        }
    }
}
