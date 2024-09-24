'use client';
import React from 'react';
import { Button } from '@mui/material';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';
import { IconShare, IconLink, IconQrcode, IconKey } from '@tabler/icons-react';
import Link from 'next/link';

const MobileSendAngPaoPage = () => {
    return (
        <>
            <div className="angpao-recipt-page">
                <h4 className="title">Send AngPao</h4>
                {/* Ang Pao Envelope Section */}
                <div className="angpao-envelope">
                    <div className="envelope-image-wrapper">
                        <img src="/mobile_images/background/angpao-envelop.png" alt="Ang Pao Envelope" className="envelope-image" />
                        <div className="angpao-content">
                            <span className="new-year-message">2024 Happy New Year</span>
                            <span className="cash-label">Cash</span>
                            <span className="amount">RM 0.01</span>
                            <div className="angpao-sender">
                                <img src="/mobile_images/contacts/addai.png" alt="Sender Avatar" className="sender-avatar" />
                                <p className="sender-name">Jasmine's Ang Pao</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Share Options */}
                <div className="share-options">
                    <sapn className="share-to">Share to</sapn>
                    <div className="share-icons">
                        <div className="share-icon">
                            <img src="/mobile_images/icons/angpao/share.png" alt="" />
                            <span>Share</span>
                        </div>
                        <div className="share-icon">
                            <img src="/mobile_images/icons/angpao/copy.png" alt="" />
                            <span>Copy Link</span>
                        </div>
                        <div className="share-icon">
                            <img src="/mobile_images/icons/angpao/qr.png" alt="" />
                            <span>QR Code</span>
                        </div>
                        <div className="share-icon">
                            <img src="/mobile_images/icons/angpao/key.png" alt="" />
                            <span>Password</span>
                        </div>
                    </div>
                </div>

                {/* OK Button */}
                <div className="ok-btn-container">
                    <Link href={paths.angpao()} passHref style={{ width: '100%', textAlign: 'center' }}>
                        <Button variant="contained" className="ok-btn">
                            OK
                        </Button>
                    </Link>
                </div>

            </div>
        </>
    );
};

export default MobileSendAngPaoPage;
