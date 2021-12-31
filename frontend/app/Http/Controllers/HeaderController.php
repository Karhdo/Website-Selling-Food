<?php

namespace App\Http\Controllers;

use App\User;
use App\SessionCustomer;
use Illuminate\Http\Request;

class HeaderController extends Controller
{
    public function getInforUser(Request $request) {
        $token = $request->header("name");
        $id_user = SessionCustomer::where('token', $token)->value('customer_id');
        $infor_user = User::where('id', $id_user)->get();
        foreach($infor_user as $key => $value)
        {
            $id = $value["id"];
            $name = $value["name"];
            $email = $value["email"];
        }
        return response()->json([
            'userid' => $id,
            'username'=> $name,
            'email' => $email
        ]);
    }
}
