'use client';
import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import PageHeader from '@/app/components/mobile/PageHeader';
import WalletCard from '@/app/components/mobile/WalletCard';
import paths from '@/paths';

const MobileWalletPage = () => {
    const router = useRouter(); // Initialize router

    const actionButtons = [
        {
            title: "Deposit",
            iconSrc: "/mobile_images/icons/wallet/deposit.png",
            action: () => router.push(paths.deposit())  // Navigate to deposit page
        },
        {
            title: "Withdraw",
            iconSrc: "/mobile_images/icons/wallet/withdraw.png",
            action: () => router.push(paths.withdraw())  // Navigate to withdraw page
        },
        {
            title: "Transfer",
            iconSrc: "/mobile_images/icons/wallet/transfer.png",
            action: () => router.push(paths.transfer())  // Navigate to transfer page
        },
        {
            title: "Convert",
            iconSrc: "/mobile_images/icons/wallet/convert.png",
            action: () => router.push(paths.convert())  // Navigate to convert page
        },
    ];

    return (
        <>
            <PageHeader backUrl={paths.home()} title="Wallet" headerClass="header" arrowColor="black" />
            <div className="wallet-wrapper">
                <div className="wallet-page">
                    {/* Wallet Card */}
                    <WalletCard />
                    {/* Action Buttons */}
                    <div className="action-buttons">
                        {actionButtons.map((button, index) => (
                            <div className="action-btn" key={index} onClick={button.action}>
                                <img src={button.iconSrc} alt={button.title} className="action-icon" />
                                <span>{button.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileWalletPage;
