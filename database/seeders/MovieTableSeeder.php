<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'The First Movie',
                'slug' => 'the-first-movie',
                'category' => 'Historycal',
                'video_url' => 'https://www.youtube.com/watch?v=7rkx9AqsHEs',
                'thumbnail' => 'https://picsum.photos/200',
                'rating' => 4.9,
                'is_featured' => true,
            ],
            [
                'name' => 'The Second Movie',
                'slug' => 'the-second-movie',
                'category' => 'Historycal',
                'video_url' => 'https://www.youtube.com/watch?v=7rkx9AqsHEs',
                'thumbnail' => 'https://picsum.photos/200',
                'rating' => 4.9,
                'is_featured' => false,
            ],
            [
                'name' => 'The Third Movie',
                'slug' => 'the-third-movie',
                'category' => 'Historycal',
                'video_url' => 'https://www.youtube.com/watch?v=7rkx9AqsHEs',
                'thumbnail' => 'https://picsum.photos/200',
                'rating' => 4.9,
                'is_featured' => true,
            ],
            [
                'name' => 'The Movie Special',
                'slug' => 'the-movie-special',
                'category' => 'Historycal',
                'video_url' => 'https://www.youtube.com/watch?v=7rkx9AqsHEs',
                'thumbnail' => 'https://picsum.photos/200',
                'rating' => 4.4,
                'is_featured' => true,
            ],
            [
                'name' => 'The Movie Special 2',
                'slug' => 'the-movie-special-2',
                'category' => 'Historycal',
                'video_url' => 'https://www.youtube.com/watch?v=7rkx9AqsHEs',
                'thumbnail' => 'https://picsum.photos/200',
                'rating' => 4.6,
                'is_featured' => false,
            ],
        ];

        Movie::insert($movies);
    }
}
