'use client';
import React from 'react';
import Image from 'next/image';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';

const MobileLuckyDrawPage = () => {
    return (
        <>
            <PageHeader backUrl={paths.promotion()} title="Lucky Draw" headerClass="header" arrowColor="black" />
            <div className="lucky-draw-page">
                <div className="lucky-draw-wraper">
                    {/* Chips and Tickets Info */}
                    <div className="lucky-draw-stats">
                        <div className="stat-item">
                            <span>Total Chips</span>
                            <span>99,900</span>
                        </div>
                        <div className="stat-item">
                            <span>Total Tickets</span>
                            <span>50</span>
                        </div>
                    </div>

                    {/* Spin Wheel */}
                    <div className="spin-wheel">
                        <Image src="/mobile_images/promotion/spinner.png" alt="Spin Wheel" width={300} height={300} className="spin-wheel-image" />
                    </div>

                    {/* Spin Button */}
                    <div className="spin-btn-container">
                        <button className="spin-btn">RM10 <Image src="/mobile_images/promotion/ticket.png" alt="alt" width={26} height={26} /> x1</button>
                    </div>
                </div>

                {/* Action Items */}
                <div className="lucky-draw-actions">
                    <div className="action-item">
                        <div>
                            <span>Deposit Up to RM 200</span>
                            <span>5 tickets</span>
                        </div>

                        <button className="go-btn">GO</button>
                    </div>
                    <div className="action-item">
                        <div>
                            <span>Bet up to RM 10,000 on Live</span>
                            <span>5 tickets</span>
                        </div>

                        <button className="go-btn">GO</button>
                    </div>
                    <div className="action-item">
                        <div>
                            <span>Bet up to RM 10,000 on Slot</span>
                            <span>5 tickets</span>
                        </div>

                        <button className="go-btn">GO</button>
                    </div>
                    <div className="action-item">
                        <div>
                            <span>Bet up to RM 10,000 on Poker</span>
                            <span>5 tickets</span>
                        </div>

                        <button className="go-btn">GO</button>
                    </div>
                    <div className="action-item">
                        <div>
                            <span>Bet up to RM 10,000 on Poker</span>
                            <span>5 tickets</span>
                        </div>

                        <button className="go-btn">GO</button>
                    </div>
                    <div className="action-item">
                        <div>
                            <span>Bet up to RM 10,000 on Poker</span>
                            <span>5 tickets</span>
                        </div>

                        <button className="go-btn">GO</button>
                    </div>
                    <div className="action-item">
                        <div>
                            <span>Bet up to RM 10,000 on Poker</span>
                            <span>5 tickets</span>
                        </div>

                        <button className="go-btn">GO</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileLuckyDrawPage;
