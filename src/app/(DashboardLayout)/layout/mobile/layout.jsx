import React from 'react';
import '@/app/mobile.css';
import '@/app/mobile-home.css';
import MobileHeader from './header';
import Banner from './banner';
import { Typography } from '@mui/material';
import { IconSpeakerphone } from '@tabler/icons-react';
import MiddleMenu from '@/app/components/mobile/MiddleMenu';
import BottomMenu from '@/app/components/mobile/BottomMenu';

const MobileLayout = ({ children }) => {
    return (
        <div className="container home-wraper">
            <MobileHeader />
            <Banner />
            <div className="announce">
                <img src="/mobile_images/icons/volume.png" alt="Audio icon" />
                <Typography variant="caption" style={{ fontSize: '0.5rem' }}>
                    Exciting news! Our new app is currently in development – stay tuned for updates!
                </Typography>
            </div>
            <MiddleMenu />
            {children}
            <BottomMenu />
        </div >
    );
};

export default MobileLayout;
