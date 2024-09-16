'use client'
import React, { useState } from 'react'
import MobileHeader from '../(DashboardLayout)/layout/mobile/header'
import Banner from '../(DashboardLayout)/layout/mobile/banner'
import { Typography } from '@mui/material'
import MiddleMenu from '../components/mobile/MiddleMenu'

const MobileHomePage = () => {
    const [activeButton, setActiveButton] = useState('sport'); // Initial active button

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    return (
        <div className="home-wraper">
            <MobileHeader />
            <Banner />
            <div className="announce">
                <img src="/mobile_images/icons/volume.png" alt="Audio icon" />
                <Typography variant="caption" style={{ fontSize: '0.5rem' }}>
                    Exciting news! Our new app is currently in development – stay tuned for updates!
                </Typography>
            </div>
            <MiddleMenu />
            <div className="sports-menu">
                <div className="menu-left">
                    <button className={`menu-button ${activeButton === 'live' ? 'active' : ''}`} onClick={() => handleButtonClick('live')}>
                        <img src={`/mobile_images/icons/${activeButton === 'live' ? 'dice-active' : 'dice'}.png`} alt="Live" className="menu-icon" />
                        Live
                    </button>
                    <button className={`menu-button ${activeButton === 'slot' ? 'active' : ''}`} onClick={() => handleButtonClick('slot')}>
                        <img src={`/mobile_images/icons/${activeButton === 'slot' ? 'slot-active' : 'slot'}.png`} alt="Slot" className="menu-icon" />
                        Slot
                    </button>
                    <button className={`menu-button ${activeButton === 'sport' ? 'active' : ''}`} onClick={() => handleButtonClick('sport')}>
                        <img src={`/mobile_images/icons/${activeButton === 'sport' ? 'ball-active' : 'ball'}.png`} alt="Sport" className="menu-icon" />
                        Sport
                    </button>
                    <button className={`menu-button ${activeButton === 'lotto' ? 'active' : ''}`} onClick={() => handleButtonClick('lotto')}>
                        <img src={`/mobile_images/icons/${activeButton === 'lotto' ? 'billard-active' : 'billard'}.png`} alt="Lotto" className="menu-icon" />
                        Lotto
                    </button>
                    <button className={`menu-button ${activeButton === 'poker' ? 'active' : ''}`} onClick={() => handleButtonClick('poker')}>
                        <img src={`/mobile_images/icons/${activeButton === 'poker' ? 'cards-active' : 'cards'}.png`} alt="Poker" className="menu-icon" />
                        Poker
                    </button>
                </div>
                <div className="menu-right">
                    <div className="banner cockfighting">
                        <img src="/mobile_images/banners/banner2.png" alt="Cock Fighting" />
                    </div>

                    <div className="banner racing">
                        <img src="/mobile_images/banners/banner3.png" alt="Horse Racing" />
                    </div>

                    <div className="banner aba-sports">
                        <img src="/mobile_images/banners/banner1.png" alt="ABA Sports" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MobileHomePage
