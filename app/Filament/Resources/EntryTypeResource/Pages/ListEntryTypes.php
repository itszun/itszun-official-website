<?php

namespace App\Filament\Resources\EntryTypeResource\Pages;

use App\Filament\Resources\EntryTypeResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListEntryTypes extends ListRecords
{
    protected static string $resource = EntryTypeResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
