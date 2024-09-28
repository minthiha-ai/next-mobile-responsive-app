'use client';
import React from 'react';
import Image from 'next/image';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';

const MobileVipPage = () => {
    return (
        <>
            <PageHeader backUrl={paths.promotion()} title="VIP" headerClass="header" arrowColor="black" />
            <div className="vip-page">
                {/* VIP Info Section */}
                <div className="vip-info">
                    <Image src="/mobile_images/promotion/vip2.png" alt="VIP Badge" width={95.37} height={110} className="vip-badge" />
                    <div className="vip-details">
                        <div className="vip-level">
                            <span>VIP2 Perks</span>
                            <span>Need more to reach VIP3</span>
                        </div>
                        <div className="vip-progress">
                            <span>40</span>/<span>100</span>
                        </div>
                        <div className="vip-progress-bar">
                            <div className="vip-progress-fill" style={{ width: '40%' }}></div>
                        </div>
                        <div className="vip-progress-text">
                            <span>VIP2</span>
                            <span>VIP3</span>
                        </div>
                    </div>
                </div>

                <div className="vip-body">
                    {/* VIP Levels Sidebar */}
                    <div className="vip-sidebar">
                        {Array.from({ length: 11 }, (_, i) => (
                            <div className={`vip-level-item ${i < 3 ? 'active' : ''}`} key={i}>
                                <span>VIP{i}</span>
                                {i > 2 && <Image src="/mobile_images/icons/padlock.png" alt="Lock" width={24} height={24} />}
                            </div>
                        ))}
                    </div>

                    {/* VIP Perks */}
                    <div className="vip-perks">
                        <div className="vip-perks-header">
                            <span>VIP2 Perks</span>
                        </div>
                        <ul className="perks-list">
                            <li><Image src="/mobile_images/icons/withdraw2.png" alt="alt" width={20} height={20} /> Withdraw Limit 3 times/day</li>
                            <li><Image src="/mobile_images/icons/rm.png" alt="alt" width={20} height={20} /> Top up Limit 50,000</li>
                            <li><Image src="/mobile_images/icons/dice-active.png" alt="alt" width={20} height={20} /> Live Rebate 0.3%</li>
                            <li><Image src="/mobile_images/icons/slot-active.png" alt="alt" width={20} height={20} /> Slot Rebate 0.5%</li>
                            <li><Image src="/mobile_images/icons/ball-active.png" alt="alt" width={20} height={20} /> Sport Rebate 0.3%</li>
                            <li><Image src="/mobile_images/icons/billard-active.png" alt="alt" width={20} height={20} /> Lotto Rebate 0.4%</li>
                            <li><Image src="/mobile_images/icons/cards-active.png" alt="alt" width={20} height={20} /> Poker Rebate 0.3%</li>
                            <li><Image src="/mobile_images/icons/gift.png" alt="alt" width={20} height={20} /> Birthday Gift <span>⭐️⭐️⭐️⭐️⭐️</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileVipPage;
