<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(Request $request) {
        $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'min: 6', 'confirmed']
        ]);
        
        $customerCreate = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'type_of_user' => 'user'
        ]);

        return response()->json([
            'code' => 201,
            'data' => $customerCreate
        ], 201);
    }
}
