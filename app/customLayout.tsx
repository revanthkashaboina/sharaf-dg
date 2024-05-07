'use client'

import { Navbar } from "../components/layout/navbar";
import { usePathname } from 'next/navigation';

export function Layout({children,}: Readonly<{children: React.ReactNode;}>){
    const pathname = usePathname();
    return(
        <>
            {pathname !== "/login" && <Navbar/>}
            {children}
        </>
    )
}