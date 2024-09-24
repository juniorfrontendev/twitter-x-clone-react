import {Outlet} from "react-router-dom";
import SideBar from "~/layouts/main/sidebar/index.jsx";
import RightBar from "~/layouts/main/RightBar/index.jsx";
export default function MainLayout() {
    return(
            <div className="w-[1265px] mx-auto flex">
                <SideBar />
                <main className= "flex-1 flex gap-[30px]">
                <main className="flex-1 max-w-[600px] border-x border-[#212529]">
                <Outlet />
                </main>
                <RightBar />
                </main>
            </div>
    )
}