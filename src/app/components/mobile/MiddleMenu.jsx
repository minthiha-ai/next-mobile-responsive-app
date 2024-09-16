import { IconInfoCircle } from '@tabler/icons-react';
import React from 'react';
import Link from 'next/link';
import paths from '@/paths';

const MiddleMenu = () => {

    const menuItems = [
        { label: 'Withdraw', icon: '/mobile_images/icons/withdraw.png' },  // Replace with real icon URLs or class names
        { label: 'Transfer', icon: '/mobile_images/icons/transfer.png' },
        { label: 'Loan', icon: '/mobile_images/icons/loan.png' },
        { label: 'Promotion', icon: '/mobile_images/icons/promotion.png' },
        { label: 'Tutorial', icon: '/mobile_images/icons/tutorial.png' },
    ];

    return (
        <div className="menu-bar-container">
            <div className="vip-container">
                <div className="vip-level">
                    <button className="badge">VIP 2</button>
                    <button className="badge">Level 5</button>
                </div>
                <div className="balance-section">
                    <div className="balance">
                        <span>RM 199,900</span>
                        <i className="info-icon"><IconInfoCircle size={18} /></i>
                    </div>
                    <Link href={paths.deposit()}>
                        <button className="deposit-button">Deposit</button>
                    </Link>
                </div>
            </div>
            <div className="menu-icons">
                {menuItems.map((item, index) => (
                    <div key={index} className="menu-item">
                        <img src={item.icon} alt={item.label} className="menu-icon" />
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MiddleMenu
