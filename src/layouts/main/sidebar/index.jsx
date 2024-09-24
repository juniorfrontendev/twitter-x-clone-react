import Logo from "~/layouts/main/sidebar/logo/index.jsx";
import Menu from "~/layouts/main/sidebar/menu/index.jsx";
import Explore from "~/layouts/main/sidebar/explore/index.jsx";

export default function SideBar(){
    return (
        <aside className="w-[275px] min-h-screen px-2">
            <Logo />
            <Menu />
            <Explore />
        </aside>
    )
}