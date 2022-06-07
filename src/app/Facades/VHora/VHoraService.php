<?php

namespace App\Facades\VHora;

use Illuminate\Support\Facades\Facade;

class VHoraService extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'App\Services\VHora\VHoraService';
    }
}