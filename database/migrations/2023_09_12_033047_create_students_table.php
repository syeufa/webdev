<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->char('idstudents', 8);
            $table->string('fullname', 100);
            $table->enum('gender', ['Male','Female']);
            $table->string('address', 100);
            $table->string('email', 100);
            $table->char('phone', 12);
            $table->primary('idstudents');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
