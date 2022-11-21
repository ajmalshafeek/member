<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ApprovalController extends Controller
{
    //
    public function index()
    {
        // return $dataTable->render('pages.user-management.index');
        //$config = theme()->getOption('page');
        $users = User::where('role', '4')->get();
        return view('pages.approval.index', compact('users'));
    }
    public function canceled()
    {
        // return $dataTable->render('pages.user-management.index');
        //$config = theme()->getOption('page');
        $users = User::where('role', '7')->get();
        return view('pages.approval.canceled', compact('users'));
    }
    public function approved()
    {
        // return $dataTable->render('pages.user-management.index');
        //$config = theme()->getOption('page');
        $users = User::where('role', '11')->get();
        return view('pages.approval.approved', compact('users'));
    }
    public function refund()
    {
        // return $dataTable->render('pages.user-management.index');
        //$config = theme()->getOption('page');
        $users = User::where('role', '10')->get();
        return view('pages.approval.refund', compact('users'));
    }
}
