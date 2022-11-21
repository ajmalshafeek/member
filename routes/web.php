<?php

use App\Http\Controllers\Account\SettingsController;
use App\Http\Controllers\ApprovalController;
use App\Http\Controllers\Auth\SocialiteLoginController;
use App\Http\Controllers\Documentation\LayoutBuilderController;
use App\Http\Controllers\Documentation\ReferencesController;
use App\Http\Controllers\Logs\AuditLogsController;
use App\Http\Controllers\Logs\SystemLogsController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\PermissionController;
use App\Models\MembershipPlan;
use App\Http\Controllers\Membership\MembershipPlanController;
use App\Http\Controllers\UserManagementController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return redirect('index');
// });

$menu = theme()->getMenu();
array_walk($menu, function ($val) {
    if (isset($val['path'])) {
        $route = Route::get($val['path'], [PagesController::class, 'index']);

        // Exclude documentation from auth middleware
        if (!Str::contains($val['path'], 'documentation')) {
            $route->middleware('auth');
        }

        // Custom page demo for 500 server error
        if (Str::contains($val['path'], 'error-500')) {
            Route::get($val['path'], function () {
                abort(500, 'Something went wrong! Please try again later.');
            });
        }
    }
});


// Documentations pages
Route::prefix('documentation')->group(function () {
    Route::get('getting-started/references', [ReferencesController::class, 'index']);
    Route::get('getting-started/changelog', [PagesController::class, 'index']);
    Route::resource('layout-builder', LayoutBuilderController::class)->only(['store']);
});

Route::middleware('auth')->group(function () {
    // Account pages
    Route::prefix('account')->group(function () {
        Route::get('settings', [SettingsController::class, 'index'])->name('settings.index');
        Route::put('settings', [SettingsController::class, 'update'])->name('settings.update');
        Route::put('settings/email', [SettingsController::class, 'changeEmail'])->name('settings.changeEmail');
        Route::put('settings/password', [SettingsController::class, 'changePassword'])->name('settings.changePassword');
    });

    // Logs pages
    Route::prefix('log')->name('log.')->group(function () {
        Route::resource('system', SystemLogsController::class)->only(['index', 'destroy']);
        Route::resource('audit', AuditLogsController::class)->only(['index', 'destroy']);
    });
    // Membership
    Route::prefix('membership')->group(function () {
        Route::get('/', [MembershipPlanController::class, 'index']);
        Route::get('overview', [MembershipPlanController::class, 'index']);
        Route::get('details', [MembershipPlanController::class, 'index']);
        Route::get('plan', [MembershipPlanController::class, 'membershipPlan'])->name('membership.plans');
        Route::get('plan/create', [MembershipPlanController::class, 'create'])->name('membership.create');
        Route::get('plan/save', [MembershipPlanController::class, 'save'])->name('membership.save');
        Route::get('plan/edit/{id}', [MembershipPlanController::class, 'edit'])->name('membership.edit');
        Route::put('plan/update', [MembershipPlanController::class, 'update'])->name('membership.update');
        Route::delete('plan/delete/{id}', [MembershipPlanController::class, 'index'])->name('membership.delete');
    });
    // User Management
    Route::prefix('user-management')->group(function () {
        Route::get('/', [UsersController::class, 'index'])->name('user-manager.index');
        Route::get('create', [UserManagementController::class, 'index'])->name('user-manager.create');
        Route::put('save', [UserManagementController::class, 'save'])->name('user-manager.save');
        Route::get('edit', [UserManagementController::class, 'edit'])->name('user-manager.edit');
        Route::put('update', [UserManagementController::class, 'update'])->name('user-manager.update');
        Route::delete('delete', [UserManagementController::class, 'delete'])->name('user-manager.delete');
        Route::get('roles/role', [RolesController::class, 'roles'])->name('user-manager.roles');
        Route::get('permissions/permission', [PermissionController::class, 'permissions'])->name('user-manager.permissions');
    });
    // Approval
    Route::prefix('approval')->group(function () {
        Route::get('request', [ApprovalController::class, 'index'])->name('approval.index');
        Route::get('edit', [ApprovalController::class, 'edit'])->name('approval.edit');
        Route::put('update', [ApprovalController::class, 'update'])->name('approval.update');
        Route::get('canceled', [ApprovalController::class, 'canceled'])->name('approval.canceled');
        Route::get('refund', [ApprovalController::class, 'refund'])->name('approval.refund');
        Route::get('approved', [ApprovalController::class, 'approved'])->name('approval.approved');
    });
    // Roles
    Route::prefix('roles')->group(function () {
        Route::get('/', [UsersController::class, 'index']);
        Route::put('/edit', [UsersController::class, 'index']);
        Route::delete('/delete/{id}', [UsersController::class, 'index']);
    });
    // Permission
    Route::prefix('permissions')->group(function () {
        Route::get('/', [UsersController::class, 'index']);
        Route::get('/edit/{id}', [UsersController::class, 'index']);
        Route::delete('/delete/{id}', [UsersController::class, 'index']);
    });
});

//Route::get('user-management', [UsersController::class, 'index']);

/**
 * Socialite login using Google service
 * https://laravel.com/docs/8.x/socialite
 */
Route::get('/auth/redirect/{provider}', [SocialiteLoginController::class, 'redirect']);

require __DIR__ . '/auth.php';
