import React, { useState } from 'react';

const BottomMenu = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemClick = (index) => {
        setActiveIndex(index);
        console.log(index);
    };

    return (
        <nav className="bottom-nav">
            <button className={`nav-item ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleItemClick(0)}>
                <img src="/mobile_images/icons/home.png" alt="Home" />
                <span>Home</span>
            </button>
            <button className={`nav-item ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleItemClick(0)}>
                <img src="/mobile_images/icons/transaction.png" alt="Transaction" />
                <span>Transaction</span>
            </button>
            <button className={`nav-item ${activeIndex === 2 ? 'active' : ''} invite-button`} onClick={() => handleItemClick(0)}>
                <div class="invite-img">
                    <img src="/mobile_images/icons/invite.png" alt="Invite" />
                </div>
                <span>Invite</span>
            </button>
            <button className={`nav-item ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleItemClick(0)}>
                <img src="/mobile_images/icons/live-chat.png" alt="Live Chat" />
                <span>Live Chat</span>
            </button>
            <button className={`nav-item ${activeIndex === 4 ? 'active' : ''}`} onClick={() => handleItemClick(0)}>
                <img src="/mobile_images/icons/wallet.png" alt="Wallet" />
                <span>Wallet</span>
            </button>
        </nav>
    )
}

export default BottomMenu
