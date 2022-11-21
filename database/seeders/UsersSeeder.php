<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\UserInfo;
use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;


class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Generator $faker)
    {
        $demoUser = User::create([
            'first_name'        => $faker->firstName,
            'last_name'         => $faker->lastName,
            'email'             => 'demo@demo.com',
            'password'          => Hash::make('demo'),
            'role'          => '4',
            'status'        => '1',
            'email_verified_at' => now(),
            'api_token'         => Hash::make('demo@demo'),
        ]);
        $demoUser->assignRole('editor', 'potential');

        $this->addDummyInfo($faker, $demoUser);

        $demoUser1 = User::create([
            'first_name'        => $faker->firstName,
            'last_name'         => $faker->lastName,
            'email'             => 'user@demo.com',
            'password'          => Hash::make('demo'),
            'role'          => '7',
            'status'        => '1',
            'email_verified_at' => now(),
            'api_token'         => Hash::make('user@demo'),
        ]);
        $demoUser1->assignRole('editor', 'user');

        $this->addDummyInfo($faker, $demoUser1);

        $demoUser2 = User::create([
            'first_name'        => $faker->firstName,
            'last_name'         => $faker->lastName,
            'email'             => 'admin@demo.com',
            'password'          => Hash::make('demo'),
            'role'            => '2',
            'status'        => '1',
            'email_verified_at' => now(),
            'api_token'         => Hash::make('admin@demo'),
        ]);
        $demoUser2->assignRole('editor', 'admin');

        $this->addDummyInfo($faker, $demoUser2);

        User::factory(100)->create()->each(function (User $user) use ($faker) {
            $this->addDummyInfo($faker, $user);
        });
    }

    private function addDummyInfo(Generator $faker, User $user)
    {
        $dummyInfo = [
            'company'  => $faker->company,
            'phone'    => $faker->phoneNumber,
            'website'  => $faker->url,
            'language' => $faker->languageCode,
            'country'  => $faker->countryCode
        ];


        $info = new UserInfo();
        foreach ($dummyInfo as $key => $value) {
            $info->$key = $value;
        }
        $info->user()->associate($user);
        $info->save();
    }
}
