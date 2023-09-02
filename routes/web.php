<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::domain("itszun.com")->group(function() {
    Route::get('/', [BlogController::class, 'home'])->name('home');
    Route::get('/article/{year}/{month}/{slug}', [BlogController::class, 'postDetail'])->name('post.detail');
    
    
    Route::get('/post', function () {
        return Inertia::render('Post', [
            'phpVersion' => PHP_VERSION,
        ]);
    });
    
    Route::get('/bookworm', function () {
        return Inertia::render('Bookworm/Home');
    });
    
    
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');
    
    Route::middleware('auth')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });
    
// });

Route::domain('fuyuzora.itszun.com')->group(function() {
    Route::get('/', function() {
        return "Hello Fuyuzora";
    })->name("fuyuzora");
});
Route::domain('w.itszun.com')->group(function() {
    Route::get('/', function() {
        return "Hello Fuyuzora";
    })->name("fuyuzora_w");
});

require __DIR__.'/auth.php';
