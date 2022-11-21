<?php

namespace Database\Seeders;

use App\Models\Membership\MembershipPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MembershipPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $membershipPlan=[
            [
                'plan'=>'Plan 1',
                'description'=>'test plan one',
                'points'=>'1 test, 2 testing, 3 tested',
                'currency'=>'USD',
                'price'=>'1000',
            ],
            [
                'plan'=>'Plan 2',
                'description'=>'test plan two',
                'points'=>'1 testing, 2 tested, 3 live',
                'currency'=>'USD',
                'price'=>'150',
            ]
    ];
    foreach($membershipPlan as $key => $value){
        MembershipPlan::create($value);
    }

        /*
            $table->string('plan');
            $table->string('description');
            $table->string('points');
            $table->string('currency');
            $table->double('price');



        */

    }
}
