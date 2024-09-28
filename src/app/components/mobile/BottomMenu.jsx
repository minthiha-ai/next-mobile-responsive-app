import React, { useState } from 'react';
import paths from '@/paths';
import Link from 'next/link';

const BottomMenu = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemClick = (index) => {
        setActiveIndex(index);
        console.log(index);
    };

    return (
        <nav className="bottom-nav">
            <Link href={paths.home()}>
                <button className={`nav-item ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleItemClick(0)}>
                    <img src="/mobile_images/icons/home.png" alt="Home" />
                    <span>Home</span>
                </button>
            </Link>
            <Link href={paths.transaction()}>
                <button className={`nav-item ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleItemClick(0)}>
                    <img src="/mobile_images/icons/transaction.png" alt="Transaction" />
                    <span>Transaction</span>
                </button>
            </Link>
            <Link href={paths.invite()}>
                <button className={`nav-item ${activeIndex === 2 ? 'active' : ''} invite-button`} onClick={() => handleItemClick(0)}>
                    <div className="invite-img">
                        <img src="/mobile_images/icons/invite.png" alt="Invite" />
                    </div>
                    <span>Invite</span>
                </button>
            </Link>
            <Link href={paths.liveChat()}>
                <button className={`nav-item ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleItemClick(0)}>
                    <img src="/mobile_images/icons/live-chat.png" alt="Live Chat" />
                    <span>Live Chat</span>
                </button>
            </Link>
            <Link href={paths.wallet()}>
                <button className={`nav-item ${activeIndex === 4 ? 'active' : ''}`} onClick={() => handleItemClick(0)}>
                    <img src="/mobile_images/icons/wallet.png" alt="Wallet" />
                    <span>Wallet</span>
                </button>
            </Link>
        </nav>
    )
}

export default BottomMenu
