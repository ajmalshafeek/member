<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission as ModelsPermission;

class PermissionController extends Controller
{
    //
    //permissions
    public function permissions()
    {
        # code...
        $permissions = ModelsPermission::get();
        return view('pages.user-management.permission.index', compact('permissions'));
    }
}
