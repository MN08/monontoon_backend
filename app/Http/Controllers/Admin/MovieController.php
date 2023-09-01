<?php

namespace App\Http\Controllers\Admin;

use App\Models\Movie;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Movie\Store;
use App\Http\Requests\Admin\Movie\Update;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $movies = Movie::all();
        return inertia('Admin/Movie/Index', [
            'movies' => $movies,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/Movie/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Store $request)
    {
        $data = $request->validated();
        $data['thumbnail'] = Storage::disk('public')->put('movies', $request->file('thumbnail'));
        $data['slug'] = Str::slug($data['name']);
        $movie = Movie::create($data);

        return redirect()->route('admin.dashboard.movie.index')->with([
            'message' => 'Create Movie Success',
            'type' => 'Success'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Movie $movie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Movie $movie)
    {
        return inertia('Admin/Movie/Edit', [
            'movie' => $movie,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Update $request, Movie $movie)
    {
        $data = $request->validated();
        if ($request->file('thumbnail')) {
            Storage::disk('public')->delete($movie->thumbnail);
            $data['thumbnail'] = Storage::disk('public')->put('movies', $request->file('thumbnail'));
        } else {
            $data['thumbnail'] = $movie->thumbnail;
        }
        // return $data;
        $movie->update($data);
        return redirect()->route('admin.dashboard.movie.index')->with([
            'message' => 'Update Movie Success',
            'type' => 'Success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movie $movie)
    {
        //
    }
}
