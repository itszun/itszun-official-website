<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Entry extends Model
{
    use HasFactory;

    protected $guarded = ["id"];

    public function entry_type(): BelongsTo
    {
        return $this->belongsTo(EntryType::class,'entry_type_id', 'id');
    }
}
