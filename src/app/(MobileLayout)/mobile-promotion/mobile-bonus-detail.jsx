'use client';
import React from 'react';
import Image from 'next/image';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';
import InsetShadowButton from '@/app/components/customs/buttons/InsetShadowButton';

const MobileBonusDetailsPage = () => {
    return (
        <>
            <PageHeader backUrl={paths.bonus()} title="New User Claim It Free" headerClass="header" arrowColor="black" />
            <div className="promotion-details-page">
                {/* Banner Section */}
                <div className="promotion-details-banner">
                    <Image src="/mobile_images/promotion/banner.png" alt="Promotion Banner" width={700} height={130} />
                </div>

                <div className="promotion-details-body">
                    {/* Activity Condition Section */}
                    <div className="promotion-details-condition">
                        <div className="promotion-details-condition-header">Activity Condition</div>
                        <div className="promotion-details-condition-details">
                            <p><span className="highlight">Activity For</span> All Members</p>
                            <p><span className="highlight">Suitable Platform</span> Kiss 918, Pragmatic, Relax Gaming, Dragon Soft, BNG, JDB Slot - Ori, SV388, UUSlots, XE88</p>
                        </div>
                    </div>

                    {/* Activity Description Section */}
                    <div className="promotion-details-description">
                        <div className="promotion-details-description-header">Activity Description</div>
                        <div className="promotion-details-description-details">
                            <p><strong>New User Claim it Free</strong></p>
                            <p>Activity Content: 10,000 angpao will be given out every day until all are finished!</p>
                            <p>Event Period: 10,000 pcs will be available during the event period!</p>
                            <p>Promotion Terms: Each player's real-name authenticated account can claim the reward once. The quantity will be updated daily!</p>
                        </div>
                        {/* Claim Button */}
                        <div className="promotion-details-claim-btn">
                            <InsetShadowButton
                                text="Claim"
                                fontSize="1rem"
                                padding="0.3rem 5rem"
                                borderradius="12px"
                                background="linear-gradient(90.78deg, #B7259F 0.36%, #760874 99.63%)"
                                inset
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileBonusDetailsPage;
