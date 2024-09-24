'use client';
import React from 'react';
import { Button, Divider } from '@mui/material';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';
import { IconTrash, IconHeart, IconUserPlus, IconArrowsExchange, IconHistory, IconPencil } from '@tabler/icons-react';
import Link from 'next/link';

const MobileContactDetailPage = () => {
    return (
        <>
            <PageHeader backUrl={paths.contact()} title="Details" headerClass="header" arrowColor="black" />
            <div className="details-page"
                style={{
                    backgroundImage: `url('/mobile_images/background/image.png')`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Profile Section */}
                <div className="profile-section">
                    <img src="/mobile_images/contacts/paul.png" alt="Profile Avatar" className="profile-avatar" />
                    <h2>Paul C. Ramos</h2>
                    <p>UID: ZY***Y68</p>
                </div>

                {/* Action Buttons */}
                <div className="action-buttons">
                    <div className="action-btn">
                        <span>
                            <IconPencil size={32} color="#fff" />
                        </span>
                        <span>Edit</span>
                    </div>
                    <div className="action-btn">
                        <span>
                            <IconTrash size={32} color="#fff" />
                        </span>
                        <span>Delete</span>
                    </div>
                    <div className="action-btn">
                        <span>
                            <IconHeart size={32} color="#fff" />
                        </span>
                        <span>Favorite</span>
                    </div>
                </div>

                {/* Additional Actions Section */}
                <div className="additional-actions">
                    <Button startIcon={<IconUserPlus />} className="additional-action-btn" fullWidth>
                        Add to Group
                    </Button>
                    <Divider />
                    <Button startIcon={<IconArrowsExchange />} className="additional-action-btn" fullWidth>
                        Exchange Collection
                    </Button>
                    <Divider />
                    <Button startIcon={<IconHistory />} className="additional-action-btn" fullWidth>
                        History
                    </Button>
                </div>

                {/* Transfer Button */}
                <Link href={paths.transferDetail()} className="transfer-link">
                    <Button variant="contained" className="transfer-btn" fullWidth>
                        Transfer
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default MobileContactDetailPage;
