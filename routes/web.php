<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/inventory', function () {
    return view('welcome');
});

Route::get('/inventory/add', function () {
    return view('welcome');
});

Route::get('/user/add', function () {
    return view('welcome');
});

Route::get('/inventory/edit/{id}', function ($id) {
    return view('welcome');
});

Route::get('/testinventory/edit/{id}', function ($id) {
    return view('welcome');
});

Route::get('/main', function () {
    return view('welcome');
});