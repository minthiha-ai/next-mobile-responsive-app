'use client';
import React from 'react';
import Image from 'next/image';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';

const MobileCollectionPage = () => {
    return (
        <>
            <PageHeader backUrl={paths.home()} title="Collection" headerClass="header" arrowColor="black" icon={<Image src="/mobile_images/collection/exchange.png" alt="Ang Pao Icon" width={46} height={46} />} />
            <div className="collection-page">
                {/* Collection Banner */}
                <div className="collection-banner">
                    <Image src="/mobile_images/collection/collection.png" alt="Collection Banner" width={350} height={150} />
                </div>

                {/* Card Filter */}
                <div className="card-filter">
                    <button className="filter-btn active">All Cards</button>
                    <div className="dropdown">
                        <select>
                            <option value="poker">POKER</option>
                            <option value="sport">SPORT</option>
                            <option value="slot">SLOT</option>
                            <option value="live">LIVE</option>
                        </select>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="cards-grid">
                    <Image src="/mobile_images/collection/card1.png" alt="Card 1" width={80} height={120} />
                    <Image src="/mobile_images/collection/card2.png" alt="Card 2" width={80} height={120} />
                    <Image src="/mobile_images/collection/card3.png" alt="Card 3" width={80} height={120} />
                    <Image src="/mobile_images/collection/card4.png" alt="Card 4" width={80} height={120} />
                    <Image src="/mobile_images/collection/card5.png" alt="Card 5" width={80} height={120} />
                    <Image src="/mobile_images/collection/card6.png" alt="Card 6" width={80} height={120} />
                    <Image src="/mobile_images/collection/card7.png" alt="Card 7" width={80} height={120} />
                    <Image src="/mobile_images/collection/card8.png" alt="Card 8" width={80} height={120} />
                    <Image src="/mobile_images/collection/card6.png" alt="Card 6" width={80} height={120} />
                    <Image src="/mobile_images/collection/card7.png" alt="Card 7" width={80} height={120} />
                    <Image src="/mobile_images/collection/card7.png" alt="Card 7" width={80} height={120} />
                    <Image src="/mobile_images/collection/card8.png" alt="Card 8" width={80} height={120} />
                    {/* Add more card images as needed */}
                </div>

                {/* Quest Section */}
                <div className="quest-section">
                    <h4>Quest</h4>
                    <div className="quest-item">
                        <div className="quest-header">
                            Collect All Live Cards
                        </div>
                        <div className="quest-body">
                            <div className="progress-container">
                                <span className="progress-text">2/10</span>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: '20%' }}></div>
                                </div>
                            </div>
                            <div className="reward-section">
                                <Image src="/mobile_images/collection/coin.png" alt="Coin" width={32} height={32} />
                                <span className="coin-value">10</span>
                                <button className="claim-btn">Claim</button>
                            </div>
                        </div>
                    </div>
                    {/* Add more quest items below */}
                    <div className="quest-item">
                        <div className="quest-header">Collect All Slot Cards</div>
                        <div className="quest-body">
                            <div className="progress-container">
                                <span className="progress-text">2/10</span>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: '20%' }}></div>
                                </div>
                            </div>
                            <div className="reward-section">
                                <Image src="/mobile_images/collection/coin.png" alt="Coin" width={32} height={32} />
                                <span className="coin-value">10</span>
                                <button className="claim-btn">Claim</button>
                            </div>
                        </div>
                    </div>
                    {/* Additional quest items as needed */}
                </div>
            </div>
        </>
    );
};

export default MobileCollectionPage;
