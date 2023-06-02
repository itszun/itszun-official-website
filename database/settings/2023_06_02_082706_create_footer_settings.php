<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

return new class extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('footer.copyright', '2023 @ x');
        $this->migrator->add('footer.links', []);
    }
};
