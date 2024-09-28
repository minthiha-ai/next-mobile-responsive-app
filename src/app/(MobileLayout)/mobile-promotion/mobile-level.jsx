'use client';
import React from 'react';
import Image from 'next/image';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';

const MobileLevelPage = () => {
    return (
        <>
            <PageHeader backUrl={paths.promotion()} title="Level" headerClass="header" arrowColor="black" />
            <div className="level-page">
                <div className="level-bg"></div>
                <div className="level-wraper">
                    {/* Navigation */}
                    <div className="level-nav">
                        <div className="level-item">
                            <Image src="/mobile_images/icons/dice.png" alt="Live" width={28} height={28} />
                            <span>Live</span>
                        </div>
                        <div className="level-item">
                            <Image src="/mobile_images/icons/slot.png" alt="Slot" width={28} height={28} />
                            <span>Slot</span>
                        </div>
                        <div className="level-item active">
                            <Image src="/mobile_images/icons/ball-active.png" alt="Sport" width={28} height={28} />
                            <span>Sport</span>
                        </div>
                        <div className="level-item">
                            <Image src="/mobile_images/icons/billard.png" alt="Lotto" width={28} height={28} />
                            <span>Lotto</span>
                        </div>
                        <div className="level-item">
                            <Image src="/mobile_images/icons/cards.png" alt="Poker" width={28} height={28} />
                            <span>Poker</span>
                        </div>
                    </div>

                    {/* Level Progress */}
                    <div className="level-info">
                        <Image src="/mobile_images/icons/ball-active.png" alt="Sport" width={50} height={50} />
                        <div className="level-progress">
                            <div className="level-progress-text">Sport</div>
                            <div className="level-bar">
                                <div className="level-bar-fill" style={{ width: '20%' }}></div>
                            </div>
                            <div className="level-details">
                                <span>Lvl. 0</span>
                                <span>To Next Level</span>
                                <span>Lvl. 1</span>
                            </div>
                        </div>
                    </div>

                    {/* Level Rewards */}
                    <div className="level-rewards">
                        <div className="level-reward-item">
                            <div>
                                <span>Level 1</span>
                                <Image src="/mobile_images/icons/open-gift.png" alt="Level 1" width={52} height={52} />
                            </div>
                            <span>FREE CASH VOUCHER 8</span>
                        </div>
                        <div className="level-reward-item">
                            <div>
                                <span>Level 2</span>
                                <Image src="/mobile_images/icons/open-gift.png" alt="Level 2" width={52} height={52} />
                            </div>
                            <span>FREE CASH VOUCHER 18</span>
                        </div>
                        <div className="level-reward-item">
                            <div className="">
                                <span>Level 3</span>
                                <Image src="/mobile_images/icons/open-gift.png" alt="Level 3" width={52} height={52} />
                            </div>
                            <span>FREE CASH VOUCHER 38</span>
                        </div>
                        <div className="level-reward-item">
                            <div className="">
                                <span>Level 4</span>
                                <Image src="/mobile_images/icons/open-gift.png" alt="Level 4" width={52} height={52} />
                            </div>
                            <span>FREE CASH VOUCHER 58</span>
                        </div>
                        <div className="level-reward-item">
                            <div className="">
                                <span>Level 5</span>
                                <Image src="/mobile_images/icons/open-gift.png" alt="Level 5" width={52} height={52} />
                            </div>
                            <span>FREE CASH VOUCHER 88</span>
                        </div>
                        <div className="level-reward-item">
                            <div className="">
                                <span>Level 10</span>
                                <Image src="/mobile_images/icons/open-gift.png" alt="Level 10" width={52} height={52} />
                            </div>
                            <span>FREE CASH VOUCHER 188</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileLevelPage;
