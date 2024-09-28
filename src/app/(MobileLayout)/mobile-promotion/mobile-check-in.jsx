'use client';
import React from 'react';
import Image from 'next/image';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';
import InsetShadowButton from '@/app/components/customs/buttons/InsetShadowButton';

const MobileDailyCheckInPage = () => {
    const days = Array.from({ length: 25 }, (_, i) => ({
        day: i + 1,
        reward: i % 10 === 0 ? 'chest' : 'coin',
        amount: 0.5,
    }));

    return (
        <>
            <PageHeader backUrl={paths.promotion()} title="Daily Check In" headerClass="header" arrowColor="black" />
            <div className="checkin-page">
                <div className="checkin-bg"></div>
                <div className="checkin-wraper">
                    {/* Reward Progress */}
                    <div className="checkin-progress">
                        <div className="claim-reward-btn">
                            <Image src="/mobile_images/promotion/claim-rewards.png" alt="Claim Rewards" width={200} height={50} />
                        </div>
                        <Image src="/mobile_images/promotion/progress.png" alt="Progress Bar" width={350} height={74} />
                        <InsetShadowButton
                            text="Claim"
                            fontSize="1rem"
                            padding="0.5rem 5rem"
                            borderradius="5px"
                            inset
                        />
                    </div>

                    {/* Days Grid */}
                    <div className="checkin-grid">
                        {days.map((day, index) => (
                            <div key={index} className="checkin-day">
                                <div className="checkin-day-label">Day {day.day}</div>
                                <Image
                                    src={day.reward === 'coin' ? '/mobile_images/promotion/coin1.png' : '/mobile_images/promotion/chest.png'}
                                    alt={day.reward}
                                    width={50}
                                    height={50}
                                />
                                <div className="checkin-day-reward">{day.amount}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileDailyCheckInPage;
