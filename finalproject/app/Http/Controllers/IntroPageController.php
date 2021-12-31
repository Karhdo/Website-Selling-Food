<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IntroPageController extends Controller
{
    public function index() {
        return view('frontend.intropage');
    }
}
