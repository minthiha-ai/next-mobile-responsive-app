import React from 'react'
import Language from './language';
import { IconMenu2 } from '@tabler/icons-react';

const MobileHeader = () => {
    return (
        <>
            <header className="header">
                <button className="menuButton"><IconMenu2 size={32} /></button>
                <div className="logo">LOGO</div>
                <div className="language"><Language /></div>
            </header>
        </>
    )
}

export default MobileHeader
