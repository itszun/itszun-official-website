<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\EntryType;
use App\Models\Song;
use Illuminate\Http\Request;

class SongController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return Song::query()
            ->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate(['title' => 'required']);
        $song = Song::create([
            'title' => $validated['title'],
            'entry_type_id' => EntryType::idOfname('song'),
            'votes' => 1
        ]);
        return $song;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
