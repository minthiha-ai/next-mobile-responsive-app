import React from 'react';
import { IconUser, IconBell, IconDiscount, IconDownload, IconSettings, IconLogout } from '@tabler/icons-react';
import Image from 'next/image';
import paths from '@/paths';
import Link from 'next/link';

const MobileSidebar = ({ isOpen, onClose }) => {
    return (
        <div className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
            <div className="profile-section">
                <Link href={paths.profile()}>
                    <Image src="/mobile_images/contacts/lisa.png" alt="Profile" width={127} height={127} className="profile-image" />
                </Link>
                <div className="profile-name">Lisa Morgan</div>
            </div>
            <div className="menu-items">
                <div className="menu-item active" onClick={onClose}>
                    <IconUser />
                    My Account
                </div>
                <div className="menu-item" onClick={onClose}>
                    <IconBell />
                    Notification
                </div>
                <div className="menu-item" onClick={onClose}>
                    <IconDiscount />
                    Rebate Lists
                </div>
                <div className="menu-item" onClick={onClose}>
                    <IconDownload />
                    Download App
                </div>
                <div className="menu-item" onClick={onClose}>
                    <IconSettings />
                    Setting
                </div>
            </div>
            <div className="logout-btn" onClick={onClose}>
                <IconLogout />
                Log out
            </div>
        </div>
    );
};

export default MobileSidebar;
