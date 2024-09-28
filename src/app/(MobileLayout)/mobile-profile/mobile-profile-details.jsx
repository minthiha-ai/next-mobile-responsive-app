'use client';
import React from 'react';
import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';
import { IconPencil } from '@tabler/icons-react';

const MobilePersonalInfoPage = () => {
    return (
        <>
            <PageHeader backUrl={paths.profile()} title="Personal" headerClass="blue-header" arrowColor="white" />
            <div className="personal-info-page">
                <div className="personal-bg">
                </div>
                <div className="personal-header">
                    <Image src="/mobile_images/contacts/lisa.png" alt="Lisa Morgan" width={86} height={86} className="profile-image" />
                    <Typography className="profile-name">Lisa Morgan</Typography>
                    <Typography className="profile-phone">+66 1234567</Typography>
                </div>

                {/* Profile Actions */}
                <div className="profile-actions">
                    <Button className="action-btn">
                        <Image src="/mobile_images/icons/edit-image.png" alt="Upload Photo" width={24} height={24} />
                        Upload Profile Photo
                    </Button>
                    <Button className="action-btn">
                        <Image src="/mobile_images/icons/edit-user.png" alt="Edit Info" width={24} height={24} />
                        Edit Personal Information
                    </Button>
                </div>

                {/* Personal Details */}
                <div className="details-section">
                    <div className="detail-item">
                        <Typography className="detail-label">Date of Birth</Typography>
                        <div className="detail-value">
                            <Typography className="detail-info">21 MAY 1992</Typography>
                            <IconPencil size={20} color='#346BEA' />
                        </div>
                    </div>
                    <div className="detail-item">
                        <Typography className="detail-label">Email</Typography>
                        <div className="detail-value">
                            <Typography className="detail-info">lisamorgan23@gmail.com</Typography>
                            <IconPencil size={20} color='#346BEA' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobilePersonalInfoPage;
