<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('membership_user_plans', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('membership_plan_id')->nullable();
            $table->string('plan')->nullable();
            $table->string('description')->nullable();
            $table->string('points')->nullable();
            $table->string('currency')->nullable();
            $table->double('price')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('membership_user_plans');
    }
};
