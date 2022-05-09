import {useSession} from "next-auth/react";

import {
    BellIcon,
    CalendarIcon,
    ChatIcon,
    ChevronDownIcon,
    DesktopComputerIcon,
    HomeIcon,
    ShoppingBagIcon,
    UserGroupIcon,
    UsersIcon,
    ViewGridIcon
} from "@heroicons/react/solid";

import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline";


function Sidebar(){
    const { data: session, status, loading } = useSession();


    return(
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow src={session.user.image} title={session.user.name}/>
        <SidebarRow Icon={UsersIcon} title="Friends"/>
        <SidebarRow Icon={UserGroupIcon} title="Groups"/>
        <SidebarRow Icon={ShoppingBagIcon} title="Marketplace"/>
        <SidebarRow Icon={DesktopComputerIcon} title="Watch"/>
        <SidebarRow Icon={CalendarIcon} title="Memories"/>
        <SidebarRow Icon={ChevronDownIcon} title="See More"/>
        </div>
    )
}
export default Sidebar