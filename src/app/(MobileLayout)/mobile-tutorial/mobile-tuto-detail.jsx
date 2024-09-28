'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { IconPlayerPlay } from '@tabler/icons-react';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';

const MobileTutoDetailPage = () => {
    const stepsData = [
        {
            stepNumber: "Step 1",
            description: "From the “Home Page”, click on the “Wallet” icon located at the bottom of the screen.",
            imageSrc: "/mobile_images/tutorials/step1.png",
        },
        {
            stepNumber: "Step 2",
            description: "Choose the “Instant Top Up” option.",
            imageSrc: "/mobile_images/tutorials/step2.png",
        },
        {
            stepNumber: "Step 3",
            description: "Select your preferred payment method.",
            imageSrc: "/mobile_images/tutorials/step3.png",
        },
        {
            stepNumber: "Step 4",
            description: "Enter the deposit amount and click “Deposit”. Follow the instructions to complete your deposit.",
            imageSrc: "/mobile_images/tutorials/step4.png",
        }
    ];

    return (
        <>
            <PageHeader backUrl={paths.tutorial()} title="How to use 'Fast Deposit'?" headerClass="blue-header" arrowColor="white" />
            <Box className="tutorial-detail-wrapper">
                <Box className="tutorial-details">
                    {/* Video Section */}
                    <Box className="video-section">
                        <img src="/mobile_images/tutorials/withdraw.png" alt="Tutorial" className="video-thumbnail" />
                        <Button className="play-btn">
                            <IconPlayerPlay size={48} />
                        </Button>
                        <Typography variant="body2" className="video-duration">16:00</Typography>
                    </Box>

                    {/* Steps Section */}
                    <Box className="steps-section">
                        <Typography variant="h4" className="step-title">How to Make a Deposit</Typography>
                        {stepsData.map((step, index) => (
                            <Box className="step-container" key={index}>
                                <img src={step.imageSrc} alt={step.stepNumber} className="step-image" />
                                <Box className="step-descriptions">
                                    <Typography variant="h5" className="step-number">{step.stepNumber}</Typography>
                                    <Typography variant="body1" className="step-description">{step.description}</Typography>
                                </Box>
                            </Box>
                        ))}

                        {/* Status Section */}
                        <Box className="status-section">
                            <Button className="status-btn">Checking the Status of your Deposit</Button>
                            <Typography variant="body2" className="status-note">
                                The transfer arrival time may vary based on your chosen deposit method and bank.
                                Please be patient while waiting for the “Deposit Success” notification and check your wallet for updates.
                                If your deposit takes longer than expected, contact customer service for further assistance.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default MobileTutoDetailPage;
