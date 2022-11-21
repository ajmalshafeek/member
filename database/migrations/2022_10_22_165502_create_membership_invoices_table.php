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
        Schema::create('membership_invoices', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('user_membership_plan_id');
            $table->string('billing_address');
            $table->string('payment_method');
            $table->string('plan');
            $table->string('plan_description');
            $table->string('currency');
            $table->string('total');
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
        Schema::dropIfExists('membership_invoices');
    }
};
