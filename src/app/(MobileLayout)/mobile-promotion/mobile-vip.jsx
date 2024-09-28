'use client';
import React from 'react';
import Image from 'next/image';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';

const MobileVipPage = () => {
    return (
        <>
            <PageHeader backUrl={paths.home()} title="VIP" headerClass="header" arrowColor="black" />
            <div className="vip-page">
                {/* VIP Info Section */}
                <div className="vip-info">
                    <Image src="/mobile_images/promotion/vip2.png" alt="VIP Badge" width={95.37} height={110} className="vip-badge" />
                    <div className="vip-details">
                        <span className="vip-level">VIP2 Perks</span>
                        <div className="vip-progress">
                            <span>40</span>/<span>100</span>
                        </div>
                        <div className="vip-progress-bar">
                            <div className="vip-progress-fill" style={{ width: '40%' }}></div>
                        </div>
                        <div className="vip-progress-text">Need more to reach VIP3</div>
                    </div>
                </div>

                <div className="vip-body">
                    {/* VIP Levels Sidebar */}
                    <div className="vip-sidebar">
                        {Array.from({ length: 11 }, (_, i) => (
                            <div className={`vip-level-item ${i === 2 ? 'active' : ''}`} key={i}>
                                <span>VIP{i}</span>
                                {i > 2 && <Image src="/mobile_images/icons/lock.png" alt="Lock" width={24} height={24} />}
                            </div>
                        ))}
                    </div>

                    {/* VIP Perks */}
                    <div className="vip-perks">
                        <div className="vip-perks-header">VIP2 Perks</div>
                        <ul className="perks-list">
                            <li>Withdraw Limit 3 times/day</li>
                            <li>Top up Limit 50,000</li>
                            <li>Live Rebate 0.3%</li>
                            <li>Slot Rebate 0.5%</li>
                            <li>Sport Rebate 0.3%</li>
                            <li>Lotto Rebate 0.4%</li>
                            <li>Poker Rebate 0.3%</li>
                            <li>Birthday Gift <span>⭐️⭐️⭐️⭐️⭐️</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileVipPage;
