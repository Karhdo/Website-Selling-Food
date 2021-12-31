<?php

namespace App\Http\Controllers;

use App\SessionCustomer;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class LoginController extends Controller
{
    public function login(Request $request) {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);
        $dataCheckLogin = [
            'email' => $request->email,
            'password' => $request->password,
            'type_of_user' => $request->type
        ];
        // B1: Xác thực user có tài khoản
        if(auth()->attempt($dataCheckLogin))
        {
            // Kiểm tra token của customer đó có tồn tại hay chưa
            $checkTokenExist = SessionCustomer::where('customer_id', auth()->id())->first();
            
            if(empty($checkTokenExist)) {
                $customerSession = SessionCustomer::create([
                    'token' => Str::random(40),
                    'refresh_token' => Str::random(40),
                    'token_expired' => date('Y-m-d H:i:s', strtotime('+30 day')),
                    'refresh_token_expired' => date('Y-m-d H:i:s', strtotime('+360 day')),
                    'customer_id' => auth()->id()
                ]);
            }
            else {
                $customerSession = $checkTokenExist;
            }
            return response()->json([
                'code' => 200,
                'data' => $customerSession
            ], 200);
        }
        else {
            return response()->json([
                'code' => 401,
                'message' => 'Username or pass khong dung'
            ], 401);
        }
    }

    public function logout(Request $request) {
        $token = $request->header("name");
        $checkTokenValid = SessionCustomer::where("token", $token)->first();
        if(!empty($checkTokenValid))
        {
            $checkTokenValid->delete();
            Auth::logout();
            return response()->json([
                'code' => 200,
                'message' => 'delete token success'
            ], 200);
        }
    }
}
