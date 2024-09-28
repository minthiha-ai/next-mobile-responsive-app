import React, { useState } from 'react';
import { IconMenu2 } from '@tabler/icons-react';
import Language from './language';
import Sidebar from './sidebar'; // The updated sidebar component

const MobileHeader = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Toggle sidebar
    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Close sidebar
    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            <header className="header">
                <button className="menuButton" onClick={handleToggleSidebar}>
                    <IconMenu2 size={32} />
                </button>
                <div className="logo">LOGO</div>
                <div className="language"><Language /></div>
            </header>

            {/* Sidebar component */}
            <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
        </>
    );
};

export default MobileHeader;
