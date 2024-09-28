'use client';
import React, { useState } from 'react';
import { Box, Button, TextField, MenuItem } from '@mui/material';
import Image from 'next/image';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';

const MobileGameRecordPage = () => {
    const [gameRecord, setGameRecord] = useState('Live');
    const [gameType, setGameType] = useState('777');
    const [startDate, setStartDate] = useState('2024-07-15');
    const [endDate, setEndDate] = useState('2024-08-15');

    const handleSearch = () => {
        console.log('Search clicked');
        // Add search logic here
    };

    return (
        <>
            <PageHeader backUrl={paths.profile()} title="Game Record" headerClass="blue-header" arrowColor="white" />
            <div className="game-record-page">
                {/* Game Record Search */}
                <Box className="search-section">
                    <TextField
                        select
                        label="Game Records"
                        value={gameRecord}
                        onChange={(e) => setGameRecord(e.target.value)}
                        className="record-select"
                    >
                        <MenuItem value="Live">Live</MenuItem>
                        <MenuItem value="Slots">Slots</MenuItem>
                    </TextField>

                    <TextField
                        select
                        label="Type of Game"
                        value={gameType}
                        onChange={(e) => setGameType(e.target.value)}
                        className="type-select"
                    >
                        <MenuItem value="777">777</MenuItem>
                        <MenuItem value="Blackjack">Blackjack</MenuItem>
                    </TextField>

                    <div className="date-section">
                        <TextField
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="date-input"
                        />
                        <span className="date-separator">-</span>
                        <TextField
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="date-input"
                        />
                    </div>

                    <Button className="search-btn" onClick={handleSearch}>Search</Button>
                </Box>

                {/* History Section */}
                <Box className="history-section">
                    <h4>History</h4>
                    <div className="no-history">
                        <Image src="/mobile_images/transaction/no-transaction.png" alt="No history" width={143} height={140} className="no-history-icon" />
                        <p>Currently there is no history</p>
                    </div>
                </Box>
            </div>
        </>
    );
};

export default MobileGameRecordPage;
