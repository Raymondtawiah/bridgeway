<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
Route::inertia('/about', 'about')->name('about');
Route::inertia('/program', 'program')->name('program');
Route::inertia('/contact', 'contact')->name('contact');
Route::inertia('/why-ghana', 'why-ghana')->name('whyGhana');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
