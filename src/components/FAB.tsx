import { TbBriefcase, TbFolder, TbMoon, TbSun, TbUser } from "react-icons/tb";
import Link from "next/link";

const routes = [
    { href: "/", label: "Profile", icon: <TbUser className="m-auto" size="1.5em" /> },
    { href: "/#projects", label: "Projects", icon: <TbFolder className="m-auto" size="1.5em" /> },
    { href: "/#experiences", label: "Experience", icon: <TbBriefcase className="m-auto" size="1.5em" /> }
];

const FAB = () => {
    return (
        <div className="flex fixed right-4 top-1/2 z-50 flex-col gap-2 -translate-y-1/2">
            {routes.map(({ href, label, icon }) => (
                <Link
                    key={label}
                    href={href}
                    className="transition-all duration-300 ease-in-out btn btn-circle btn-primary hover:btn-secondary"
                    passHref>
                    {icon}
                </Link>
            ))}
            <label className="transition-all duration-300 ease-in-out swap swap-rotate btn btn-circle btn-primary hover:btn-secondary">
                <input type="checkbox" className="theme-controller" value="caramellatte" />
                <TbSun className="m-auto swap-on" size="1.5em" />
                <TbMoon className="m-auto swap-off" size="1.5em" />
            </label>
        </div>
    );
};

export default FAB;
