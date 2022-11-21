<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserManagerRequest;

class UserManagementController extends Controller
{
    //
    public function index()
    {
        // return $dataTable->render('pages.user-management.index');
        //$config = theme()->getOption('page');
        // $users = User::get();
        //  die('test');
        return view('pages.user-management.create');
    }


    public function edit(Request $request)
    {
        $id = $request->id;
        $info = UserInfo::where('user_id', $id)
            ->first();
        $user = User::where('id', $id)->first();
        return view('pages.user-management.edit', compact('info', 'id', 'user'));
    }

    public function update(UserManagerRequest $request)
    {
        // save user name
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name'  => 'required|string|max:255',
            'email'  => 'required|string|max:255',
        ]);

        auth()->user()->update($validated);
        // save on user info
        $info = null;

        $info = UserInfo::where('user_id', $request->id)->first();


        if ($info === null) {
            // create new model
            $info = new UserInfo();
        }
        // attach this info to the current user
        $user = User::where('id', $request->id)->first();
        $info->user()->associate($user);

        foreach ($request->only(array_keys($request->rules())) as $key => $value) {
            if (is_array($value)) {
                $value = serialize($value);
            }
            $info->$key = $value;
        }

        // include to save avatar
        if ($avatar = $this->upload()) {
            $info->avatar = $avatar;
        }

        if ($request->boolean('avatar_remove')) {
            Storage::delete($info->avatar);
            $info->avatar = null;
        }

        $info->save();

        $users = User::get();
        return view('pages.user-management.index', compact('users'));
    }
    public function save(UserManagerRequest $request)
    {
        // save user name
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name'  => 'required|string|max:255',
            'email'  => 'required|string|max:255',
        ]);


        // auth()->user()->update($validated);
        // save on user info

        $info = null;
        $user = null;

        $user = User::where('email', $request->email)->first();
        $info = UserInfo::where('user_id', $request->id)->first();
        $message = "User Email Already Exist";
        if ($user === null) {
            //$user = new User();
            $default_role = 4;
            $user = User::create([
                'first_name'        => $request->first_name,
                'last_name'         => $request->last_name,
                'email'             => $request->email,
                'password'          => Hash::make($request->email),
                'role'            => $default_role,
                'status'        => '1',
                'email_verified_at' => now(),
                'api_token'         => Hash::make($request->email),
            ]);
            $user->assignRole('editor', 'potential');
            $user->save();
            //   dd($user);

            // create new model


            $info = new UserInfo();
            // attach this info to the current user
            // $user = User::where('id', $request->id)->first();

            $info->user()->associate($user);

            foreach ($request->only(array_keys($request->rules())) as $key => $value) {
                if (is_array($value)) {
                    $value = serialize($value);
                }
                $info->$key = $value;
            }

            // include to save avatar
            if ($avatar = $this->upload()) {
                $info->avatar = $avatar;
            }

            if ($request->boolean('avatar_remove')) {
                Storage::delete($info->avatar);
                $info->avatar = null;
            }

            $info->save();

            $users = User::get();
            $message = "User's Account Created! Successful";
            return view('pages.user-management.index', compact(['users', 'message']));
        }
        $message = "User Email Already Exist! Failed";
        return view('pages.user-management.create', compact('message'));
    }
    public function upload($folder = 'images', $key = 'avatar', $validation = 'image|mimes:jpeg,png,jpg,gif,svg|max:2048|sometimes')
    {
        request()->validate([$key => $validation]);

        $file = null;
        if (request()->hasFile($key)) {
            $file = Storage::disk('public')->putFile($folder, request()->file($key), 'public');
        }

        return $file;
    }

    public function delete(UserManagerRequest $request)
    {
        $message = "Delete User Account For This Email " . $request->email . "! Successful";
        $res = User::where('id', $request->id)->where('email', $request->email)->delete();
        if ($res) {
            $res = UserInfo::where('user_id', $request->id)->delete();
        } else {
            $message = "Delete User Account For This Email " . $request->email . "! Failed";
        }
        $users = User::get();
        return view('pages.user-management.index', compact(['users', 'message', 'res']));
    }
}
