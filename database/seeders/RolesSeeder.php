<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = $this->data();

        foreach ($data as $value) {
            Role::create([
                'name' => $value['name'],
            ]);
        }
    }

    public function data()
    {
        return [
            ['name' => 'super admin'],
            ['name' => 'admin'],
            ['name' => 'editor'],
            ['name' => 'new request'],
            ['name' => 'staff'],
            ['name' => 'member'],
            ['name' => 'potential'],
            ['name' => 'vendor'],
            ['name' => 'user'],
            ['name' => 'rejected'],
            ['name' => 'canceled'],
        ];
    }
}
