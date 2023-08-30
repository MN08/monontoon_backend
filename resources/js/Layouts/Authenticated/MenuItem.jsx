import { Link } from "@inertiajs/react";

export default function MenuItem({link,icon,menuName,isActive,method = 'get'}){
    return(
        <Link href={link ? route(link):null} className={`side-link ${isActive && "active"}`} method={method} as="button">
            {icon}
            {menuName}
        </Link>
    )
}
