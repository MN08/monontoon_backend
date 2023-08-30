import { Head } from "@inertiajs/react";
import Sidebar from "./Sidebar";
import TopBar from "./Topbar";

export default function AuthenticatedUser({activePlan,user,children}){
    return(
        <>
        <Head title="Dashboard"/>
            <div className="hidden mx-auto max-w-screen lg:block">
                {/* Sidebar */}
                    <Sidebar auth={activePlan}/>
                {/* End Sidebar */}
                {/* Content */}
                <div className="ml-[300px] px-[50px]">
                    <div className="py-10 flex flex-col gap-[50px]">
                        {/* TopBar */}
                        <TopBar name={user.name}/>
                        {/* End TopBar */}
                        <main>{children}</main>
                    </div>
                </div>
                {/* End Content */}
            </div>
            <div className="flex w-full h-screen px-4 mx-auto bg-black lg:hidden">
                <div className="my-auto text-2xl font-medium leading-snug text-center text-white">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>
        </>
    )
}
