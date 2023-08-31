<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscriptionPlan = [
            [
                'name' => 'Basic',
                'price' => 249999,
                'active_periode_in_months' => 3,
                'features' => json_encode([
                    'Feature 1',
                    'Feature 2',
                ]),
            ],
            [
                'name' => 'Premium',
                'price' => 649999,
                'active_periode_in_months' => 7,
                'features' => json_encode([
                    'Feature 1',
                    'Feature 2',
                    'Feature 3',
                    'Feature 4',
                ]),
            ],
        ];

        SubscriptionPlan::insert($subscriptionPlan);
    }
}
