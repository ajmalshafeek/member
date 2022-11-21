<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class RolesController extends Controller
{
    //
    //roles
    public function roles()
    {
        # code...
        $roles = Role::get();
        return view('pages.user-management.role.index', compact('roles'));
    }
}
