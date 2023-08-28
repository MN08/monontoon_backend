import SubscriptionCard from "@/Components/SubscriptionCard";
import AuthenticatedUser from "@/Layouts/Authenticated/Index";

export default function SubscriptionPlan(){
    return(
        <AuthenticatedUser>
                <div className="flex flex-col items-center py-2">
                <div className="text-black font-semibold text-[20px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-[16px] text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>
                {/* pricing card */}
                <div className="flex justify-center gap-10 mt-[30px]">
                    {/* Basic */}
                    <SubscriptionCard
                        name="Basic"
                        price="299.000"
                        durationInMonth={3}
                        features={["Unlock 10 basic movies","Unlock 10 basic movies 2","Unlock 10 basic movies"]}
                    />
                    {/* Pro */}
                    <SubscriptionCard isPremium
                        name="Premium"
                        price="499.000"
                        durationInMonth={3}
                        features={["Unlock 200 awards movies"]}
                    />

                </div>
            </div>
        </AuthenticatedUser>
    )
}
