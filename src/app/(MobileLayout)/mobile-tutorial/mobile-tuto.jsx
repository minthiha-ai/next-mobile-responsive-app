'use client';
import React, { useState } from 'react';
import { Box, Button, Grid, IconButton, TextField } from '@mui/material';
import { IconArrowRight, IconChevronRight, IconPlayerPlay, IconSearch } from '@tabler/icons-react';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';
import Link from 'next/link';

const MobileTutoPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const popularTutorials = [
        {
            title: "How to Withdraw from the app?",
            duration: "16:00",
            thumbnail: "/mobile_images/tutorials/withdraw.png",
        },
        {
            title: "Another Popular Tutorial",
            duration: "12:00",
            thumbnail: "/mobile_images/tutorials/withdraw.png",
        },
        {
            title: "One More Tutorial",
            duration: "10:00",
            thumbnail: "/mobile_images/tutorials/withdraw.png",
        }
    ];

    const tutorials = [
        { title: "How to use 'Fast Deposit'?" },
        { title: "How to use 'Bank Deposit'?" },
        { title: "How to use 'E-Wallet Deposit'?" },
        { title: "How to use 'Telco Deposit'?" }
    ];

    const handleSlideChange = (newSlide) => {
        setCurrentSlide(newSlide);
    };

    return (
        <>
            <PageHeader backUrl={paths.home()} title="Tutorial" headerClass="blue-header" arrowColor="white" />
            <Box className="tutorial-wrapper">
                {/* Search Bar */}
                <Box className="search-bar">
                    <TextField
                        fullWidth
                        variant="outlined"
                        value={searchValue}
                        onChange={handleSearchChange}
                        placeholder="Search Tutorial"
                        className="search-input"
                        InputProps={{
                            endAdornment: (
                                <IconSearch style={{ marginRight: '10px', color: '#888' }} size={36} />
                            )
                        }}
                    />
                </Box>

                <Box className="tutorial-page" style={{ borderRadius: '40px 40px 0 0' }}>
                    {/* Popular Tutorial Slider */}
                    <Box className="popular-tutorial-section">
                        <h4>Popular Tutorial</h4>
                        <Box className="popular-tutorials-slider">
                            {popularTutorials.map((tutorial, index) => (
                                <Box key={index} className="tutorial-card">
                                    <img src={tutorial.thumbnail} alt={tutorial.title} className="tutorial-thumbnail" />
                                    <span className="tutorial-duration">{tutorial.duration}</span>
                                    <span className="title">{tutorial.title}</span>
                                    <Button className="watch-btn">Watch Tutorial</Button>
                                </Box>
                            ))}
                        </Box>
                        {/* Slider Dots */}
                        <Box className="slider-dots">
                            {popularTutorials.map((_, index) => (
                                <IconButton
                                    key={index}
                                    className={currentSlide === index ? "dot active" : "dot"}
                                    onClick={() => handleSlideChange(index)}
                                />
                            ))}
                        </Box>
                    </Box>

                    {/* Category Buttons */}
                    <Box className="category-section">
                        <span>Category</span>
                        <Box className="category-btns">
                            <Button className="category-btn active">Deposit</Button>
                            <Button className="category-btn">Withdrawal</Button>
                            <Button className="category-btn">Transfer</Button>
                            <Button className="category-btn">VIP</Button>
                            <Button className="category-btn">Loan</Button>
                            <Button className="category-btn">Promotion</Button>
                        </Box>
                    </Box>

                    {/* Tutorials List */}
                    <Box className="tutorial-list-section">
                        <h4>Tutorial</h4>
                        <Box className="tutorial-list">
                            {tutorials.map((tutorial, index) => (
                                <Link href={paths.tutorialDetail()}>
                                    <Box className="tutorial-item" key={index}>
                                        <Box className="tutorial-icon">
                                            <img src="/mobile_images/icons/video-player.png" alt="" />
                                        </Box>
                                        <Box className="tutorial-info">
                                            <span>{tutorial.title}</span>
                                        </Box>
                                        <Box className="tutorial-arrow">
                                            <IconArrowRight size={24} color='white' />
                                        </Box>
                                    </Box>
                                </Link>
                            ))}
                        </Box>
                    </Box>

                    {/* Support Section */}
                    <Box className="support-section">
                        <Box className="text">
                            <span>Didn’t find a solution?</span>
                            <span> Contact our Customer Service Now!</span>
                        </Box>
                        <img src="/mobile_images/icons/service.png" alt="" />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default MobileTutoPage;
