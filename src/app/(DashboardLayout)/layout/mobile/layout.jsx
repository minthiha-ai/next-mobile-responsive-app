'use client';
import React from 'react';
import BottomMenu from '@/app/components/mobile/BottomMenu';
import { usePathname } from 'next/navigation';

const MobileLayout = ({ children }) => {
    const pathname = usePathname();

    // Specify the paths where the BottomMenu should not be rendered
    const excludeBottomMenuPaths = ['/bank/transfer/detail/recipt', '/bank/transfer/angpao/send', '/bank/transfer/angpao/recieve', '/auth/login', '/auth/signup'];

    const shouldRenderBottomMenu = !excludeBottomMenuPaths.includes(pathname);

    return (
        <div className="container">
            {children}
            {shouldRenderBottomMenu && <BottomMenu />}
        </div>
    );
};

export default MobileLayout;
