export default function SubscriptionDetail({name,isPremium,remainingActiveDays,activeDays}){
    const remainingDays = activeDays-remainingActiveDays;
    const activeProgress = ()=>{
        const progress = remainingDays / activeDays;
        if(activeProgress < 0.25){
            return 'w-3/12';
        }else if(activeProgress < 0.5){
            return 'w-6/12';
        }else if(activeProgress < 0.75){
            return 'w-9/12';
        }else{
            return 'w-full'
        }
    }
    return(
       <>
        {/* // <!-- Subscription details Basic--> */}
        {!isPremium &&
            <div className="mt-auto pr-[30px] mb-4">
                <div className="p-5 bg-white rounded-[25px] outline outline-1 outline-[#f1f1f1]">
                    <div className="text-black text-lg font-semibold mb-8">
                        {name}
                    </div>
                    <div className="text-black text-sm mb-2">
                        {remainingActiveDays} of {activeDays} days
                    </div>
                    <div className="rounded-full w-full h-[6px] bg-[#f1f1f1]">
                        <div className="rounded-full h-full w-2/12 bg-alerange"></div>
                    </div>
                </div>
            </div>
        }

        {/* // <!-- Subscription details Premium--> */}
        {isPremium &&
            <div className="mt-auto pr-[30px] mb-4">
                <div className="p-5 bg-black rounded-[25px]">
                    <img src="/icons/ic_star-rounded.svg" alt=""/>
                    <div className="mt-4 mb-8 text-lg font-semibold text-white">
                        {name}
                    </div>
                    <div className="mb-2 text-sm text-white">
                        {remainingActiveDays} of {activeDays} days
                    </div>
                    <div className="rounded-full w-full h-[6px] bg-[#333333]">
                        <div className={`${activeProgress()} h-full rounded-full bg-alerange`}></div>
                    </div>
                </div>
            </div>
        }
       </>
    )
}
