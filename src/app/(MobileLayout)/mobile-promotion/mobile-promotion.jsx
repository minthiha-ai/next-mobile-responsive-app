'use client';
import React from 'react';
import Image from 'next/image';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';
import Link from 'next/link';

const MobilePromotionPage = () => {
    return (
        <>
            <PageHeader backUrl={paths.home()} title="Promotion" headerClass="header" arrowColor="black" />
            <div className="promotion-page">
                <div className="promotion-grid">
                    {/* Left Side Promotions */}
                    <div className="promotion-grid">
                        {/* Left Side Promotions */}
                        <div className="left-side">
                            <Link href={paths.bonus()}>
                                <Image className="promo-item" src="/mobile_images/promotion/bonus.png" alt="BONUS" width={144} height={170} />
                            </Link>
                            <Link href={paths.vip()}>
                                <Image className="promo-item" src="/mobile_images/promotion/vip.png" alt="VIP" width={144} height={160} />
                            </Link>
                            <Link href={paths.luckyDraw()}>
                                <Image className="promo-item" src="/mobile_images/promotion/lucky-draw.png" alt="LUCKY DRAW" width={144} height={170} />
                            </Link>
                        </div>

                        {/* Right Side Promotions */}
                        <div className="right-side">
                            <Link href={paths.checkIn()}>
                                <Image className="promo-item" src="/mobile_images/promotion/check-in.png" alt="CHECK IN" width={144} height={170} />
                            </Link>
                            <Link href={paths.level()}>
                                <Image className="promo-item" src="/mobile_images/promotion/level.png" alt="LEVEL" width={144} height={160} />
                            </Link>
                            <Link href={paths.collection()}>
                                <Image className="promo-item" src="/mobile_images/promotion/collection.png" alt="COLLECTION" width={144} height={160} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobilePromotionPage;
