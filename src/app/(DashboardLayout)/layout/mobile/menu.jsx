import React from 'react'
import '@/app/mobile.css';

const MobileMenu = () => {
    return (
        <nav className="bottomNav">
            <button>Home</button>
            <button>Transaction</button>
            <button>Invite</button>
            <button>Live Chat</button>
            <button>Wallet</button>
        </nav>
    )
}

export default MobileMenu
