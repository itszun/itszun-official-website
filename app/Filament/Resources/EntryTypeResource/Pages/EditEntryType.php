<?php

namespace App\Filament\Resources\EntryTypeResource\Pages;

use App\Filament\Resources\EntryTypeResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditEntryType extends EditRecord
{
    protected static string $resource = EntryTypeResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
