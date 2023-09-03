import SubscriptionDetail from "./SubscriptionDetailComponent";
import { UserMenu, UserOtherMenu } from "./MenuList";
import MenuItem from "./MenuItem";

export default function Sidebar({auth}){
   return (
    <aside className="fixed z-50 w-[300px] h-full pb-4">
    <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
        <a href="/">
            <img src="/images/moonton.svg" alt=""/>
        </a>
        <div className="links flex flex-col mt-[60px] h-full gap-[50px]">

            <div>
                <div className="mb-4 text-sm text-gray-1">Menu</div>
                {UserMenu.map((listMenu,index)=>(
                    <MenuItem
                        key={`${index}-${listMenu.menuName}`}
                        link={listMenu.link}
                        icon={listMenu.icon}
                        menuName={listMenu.menuName}
                        isActive={
                            listMenu.link && route().current(listMenu.link)
                        }

                    />
                ))}
            </div>
            <div>
                <div className="mb-4 text-gray-1 side-link">Others</div>
                {UserOtherMenu.map((listOtherMenu,index)=>(
                    <MenuItem
                        key={`${index}-${listOtherMenu.menuName}`}
                        link={listOtherMenu.link}
                        icon={listOtherMenu.icon}
                        menuName={listOtherMenu.menuName}
                        isActive={
                            listOtherMenu.link && route().current(listOtherMenu.link)
                        }
                        method={listOtherMenu.method}
                    />
                ))}
            </div>
            {/* <!-- Subscription details --> */}

                {/* {auth.activePlan && (
                    <SubscriptionDetail
                    name={auth.activePlan.name}
                    isPremium={auth.activePlan.name === "Premium"}
                    remainingActiveDays={
                        auth.activePlan.remainingActiveDays
                    }
                    activeDays={auth.activePlan.activeDays}
                    />
                )} */}

            {/* <!-- ./Subscription details --> */}

        </div>
    </div>
    </aside>
   )
}
