<?php

namespace App\Http\Controllers\Membership;

use Illuminate\Http\Request;
use App\Models\Membership\MembershipPlan;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\MembershipPlanRequest;

class MembershipPlanController extends Controller
{
    //
    public function index()
    {
        $membershipPlan = DB::table('membership_plans')
            ->orderByDesc('id')
            ->get();
        $id = auth()->user()->id;

        return view('pages.membership.index', compact(['membershipPlan', 'id']));
    }
    public function membershipPlan()
    {
        $member = DB::table('membership_plans')
            ->orderByDesc('id')
            ->get();
        $id = auth()->user()->id;

        return view('pages.membership.plan.index', compact(['member', 'id']));
    }

    public function edit($id)
    {
        $member = MembershipPlan::find($id);

        return view('pages.membership.plan.edit', compact(['member']));
    }

    public function create()
    {
        return view('pages.membership.plan.create');
    }

    public function update(MembershipPlanRequest $request)
    {

        // save user name
        $validated = $request->validate([
            'plan' => 'required|string|max:255',
            'price'  => 'required|integer|min:1',
        ]);
        // save on membership info

        $membershipPlan = MembershipPlan::where('plan', $request->plan)->update($request->except([
            '_token', '_method'
        ]));

        if ($membershipPlan === null) {
            // create new model
            $membershipPlan = new MembershipPlan();
        }

        // attach this info to the current user
        //      $membershipPlan->user()->associate(auth()->user());

        foreach ($request->only(array_keys($request->rules())) as $key => $value) {
            if (is_array($value)) {
                $value = serialize($value);
            }
            $membershipPlan->$key = $value;
        }

        $membershipPlan->save();


        $update = true;
        return view('pages.membership.plan', compact(['update']));
        //  return redirect(route('membership.plans', compact(['update'])));
        // return route('membership.plans', compact(['update']));
        //    return redirect()->intended('membership/plans');
    }
    public function save(MembershipPlanRequest $request)
    {

        // save user name
        $validated = $request->validate([
            'plan' => 'required|string|max:255',
            'price'  => 'required|integer|min:1',
        ]);
        // save on membership info

        $membershipPlan = MembershipPlan::where('plan', $request->plan)->update($request->except([
            '_token', '_method'
        ]));

        if ($membershipPlan === null) {
            // create new model
            $membershipPlan = new MembershipPlan();
        } else {
            return view('pages.membership.plan', compact(['update']));
        }

        // attach this info to the current user
        //      $membershipPlan->user()->associate(auth()->user());

        foreach ($request->only(array_keys($request->rules())) as $key => $value) {
            if (is_array($value)) {
                $value = serialize($value);
            }
            $membershipPlan->$key = $value;
        }

        $membershipPlan->save();


        $update = true;
        return view('pages.membership.plan', compact(['update']));
        //  return redirect(route('membership.plans', compact(['update'])));
        // return route('membership.plans', compact(['update']));
        //    return redirect()->intended('membership/plans');
    }
}
