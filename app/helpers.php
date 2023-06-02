<?php

use Illuminate\Support\Facades\Cache;

if(!function_exists('_ukyoDBCache')) {
    function _ukyoDBCache($key, $closure = null, $ttl = 1000) {
        $data = Cache::get($key);
        if($data) {
            return $data;
        }

        if($closure) {
            $data = $closure();
        }

        Cache::add($key, $data, $ttl);

        return $data;
    }
}
