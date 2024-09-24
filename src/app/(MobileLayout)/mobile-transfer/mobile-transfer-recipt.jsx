import React from 'react';
import { Button, Divider, Fab } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DownloadIcon from '@mui/icons-material/Download';
import Link from 'next/link';
import { IconShare2, IconX } from '@tabler/icons-react';
import paths from '@/paths';

const MobileTransferReceipt = () => {
    return (
        <div className="payment-success-page">
            <header className="payment-success-page-header">
                <Link href={paths.transfer()}>
                    <Fab>
                        <IconX />
                    </Fab>
                </Link>
                <div className="payment-success-page-logo">LOGO</div>
                <Fab>
                    <IconShare2 />
                </Fab>
            </header>

            <div className="payment-success-page-content">
                <CheckCircleIcon className="payment-success-page-success-icon" />
                <h2 className="payment-success-page-success-title">Payment Success!</h2>

                <Divider className="payment-success-page-divider" />
                <div className="payment-success-page-transaction-details">
                    <div className="payment-success-page-detail-item">
                        <span>References Number</span>
                        <span>000085752257</span>
                    </div>
                    <div className="payment-success-page-detail-item">
                        <span>Date</span>
                        <span>July 25, 2024</span>
                    </div>
                    <div className="payment-success-page-detail-item">
                        <span>Time</span>
                        <span>07:80 AM</span>
                    </div>
                    <div className="payment-success-page-detail-item">
                        <span>Transfer to</span>
                        <span>PLAYER1628076235</span>
                    </div>
                    <Divider className="payment-success-page-divider" />
                    <div className="payment-success-page-detail-item">
                        <span>Amount</span>
                        <span className="payment-success-page-amount">RM 100</span>
                    </div>
                </div>
                <Divider className="payment-success-page-divider" />
                <Button
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    className="payment-success-page-pdf-btn"
                    fullWidth
                >
                    Get PDF Receipt
                </Button>
            </div>

            {/* Move "Back to Home" button here at the bottom */}

            <Button variant="contained" className="payment-success-page-back-home-btn" fullWidth>
                <Link href="/" passHref>
                    Back to Home
                </Link>
            </Button>

        </div>
    );
};

export default MobileTransferReceipt;
