<?php

namespace App\Filament\Resources\EntryTypeResource\Pages;

use App\Filament\Resources\EntryTypeResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateEntryType extends CreateRecord
{
    protected static string $resource = EntryTypeResource::class;
}
