import React from 'react';
import BottomMenu from '@/app/components/mobile/BottomMenu';

const MobileLayout = ({ children }) => {
    return (
        <div className="container">
            {children}
            <BottomMenu />
        </div >
    );
};

export default MobileLayout;
