'use client';
import React from 'react';
import Image from 'next/image';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';
import Link from 'next/link';

const MobileBonusPage = () => {

    // Generating an array with 10 elements
    const bonusItems = Array.from({ length: 10 });

    return (
        <>
            <PageHeader backUrl={paths.home()} title="Bonus" headerClass="header" arrowColor="black" />
            <div className="bonus-page">
                {bonusItems.map((_, index) => (
                    <div className="bonus-item" key={index}>
                        <Image className="bonus-image" src="/mobile_images/promotion/casino.png" alt="Casino Bonus" width={100} height={100} />
                        <div className="bonus-details">
                            <div className="bonus-title">Log in & Claim your prize</div>
                            <div className="bonus-description">Day 10 Streak Log in will get the prize</div>
                            <Link href={paths.bonusDetail()} className="claim-btn">Claim</Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MobileBonusPage;
