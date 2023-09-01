import SubscriptionCard from "@/Components/SubscriptionCard";
import AuthenticatedUser from "@/Layouts/Authenticated/Index";
import { router } from '@inertiajs/react'

export default function SubscriptionPlan({auth,subscriptionPlans}){
    const selectSubscription = id =>{
        router.post(route('user.dashboard.subscriptionPlan.userSubscribe',{
            subscriptionPlan:id,
        }));
    }
    return(
    <AuthenticatedUser user={auth.user} activePlan={auth}>
        <div className="flex flex-col items-center py-2">
            <div className="text-black font-semibold text-[20px] mb-3">
                Pricing for Everyone
            </div>
            <p className="text-[16px] text-gray-1 leading-7 max-w-[302px] text-center">
                Invest your little money to get a whole new experiences from movies.
            </p>
            {/* pricing card */}
            <div className="flex justify-center gap-10 mt-[30px]">
                {subscriptionPlans.map((subscriptionPlan)=>(
                    <SubscriptionCard
                        name={subscriptionPlan.name}
                        price={subscriptionPlan.price}
                        durationInMonth={subscriptionPlan.active_periode_in_months}
                        features={JSON.parse(subscriptionPlan.features)}
                        isPremium={subscriptionPlan.name === 'Premium'}
                        key={subscriptionPlan.id}
                        onSelectSubscription={()=>selectSubscription(subscriptionPlan.id)}
                    />
                ))}
            </div>
        </div>
    </AuthenticatedUser>
    )
}