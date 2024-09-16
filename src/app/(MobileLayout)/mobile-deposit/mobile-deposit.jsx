'use client'
import React, { useState } from 'react';
import PageHeader from '@/app/components/mobile/PageHeader';
import { IconChevronRight } from '@tabler/icons-react';
import { Slide, Dialog } from '@mui/material';
import paths from '@/paths';
import PaymentMethod from '@/app/components/mobile/deposit/PaymentMethod';
import BankList from '@/app/components/mobile/deposit/BankList';

const MobileDeposit = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [popupContent, setPopupContent] = useState(<></>);

    const handleOpenPopup = (method) => {
        switch (method) {
            case 'topup':
                setPopupContent(<PaymentMethod />);
                break;
            case 'bank':
                setPopupContent(<BankList />);
                break;
            default:
                setPopupContent(<p>No options available</p>);
        }
        setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    return (
        <>
            <PageHeader backUrl={paths.home()} title="Top Up" />
            <div className="deposit-page">
                <div className="wallet-card">
                    <div className="wallet-header">
                        <span>Wallet</span>
                        <img src="/mobile_images/icons/eye.png" alt="" />
                    </div>

                    <div className="wallet-balance">
                        199,900
                    </div>

                    <div className="wallet-currency">
                        <select>
                            <option value="RM">RM</option>
                            <option value="RM">USDT</option>
                            <option value="RM">YUAN</option>
                        </select>
                    </div>

                    <div className="wallet-details">
                        <div className="wallet-detail-item">
                            <span>Cash</span>
                            <strong>RM 100,000</strong>
                        </div>
                        <div className="divider"></div>
                        <div className="wallet-detail-item">
                            <span>Chips</span>
                            <strong>99,900</strong>
                        </div>
                    </div>
                </div>

                <section className="deposit-method">
                    <h2>Select deposit method</h2>
                    <ul>
                        <li className="method">
                            <div className="method-info">
                                <img src="/mobile_images/icons/deposit/topup.png" alt="Instant Top Up" />
                                Instant Top Up
                            </div>
                            <div className="method-info-right">
                                <span className="hot-badge">HOT</span>
                                <button onClick={() => handleOpenPopup('topup')}><IconChevronRight /></button>
                            </div>
                        </li>
                        <li className="method">
                            <div className="method-info">
                                <img src="/mobile_images/icons/deposit/bank-transfer.png" alt="Bank Transfer" />
                                Bank Transfer
                            </div>
                            <div className="method-info-right">
                                <span className="hot-badge">HOT</span>
                                <button onClick={() => handleOpenPopup('bank')}><IconChevronRight /></button>
                            </div>
                        </li>
                        <li className="method">
                            <div className="method-info">
                                <img src="/mobile_images/icons/deposit/e-wallet.png" alt="E-Wallet" />
                                E-Wallet
                            </div>
                            <div className="method-info-right">
                                <button><IconChevronRight /></button>
                            </div>
                        </li>
                        <li className="method">
                            <div className="method-info">
                                <img src="/mobile_images/icons/deposit/telco-pin.png" alt="Telco Pin" />
                                Telco Pin
                            </div>
                            <div className="method-info-right">
                                <button><IconChevronRight /></button>
                            </div>
                        </li>
                        <li className="method">
                            <div className="method-info">
                                <img src="/mobile_images/icons/deposit/crypto.png" alt="Crypto (USDT)" />
                                Crypto (USDT)
                            </div>
                            <div className="method-info-right">
                                <button><IconChevronRight /></button>
                            </div>
                        </li>
                        <li className="method">
                            <div className="method-info">
                                <img src="/mobile_images/icons/deposit/loan.png" alt="Loan" />
                                Loan
                            </div>
                            <div className="method-info-right">
                                <button><IconChevronRight /></button>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
            <Dialog
                open={openPopup}
                onClose={handleClosePopup}
                fullScreen
                PaperProps={{
                    style: {
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 'auto',
                        borderRadius: '20px 20px 0 0',
                    },
                }}
                TransitionComponent={Slide}
                TransitionProps={{
                    direction: "up"
                }}
            >
                <div className="popup-content">
                    <button onClick={handleClosePopup} className="close-btn"></button>
                    {popupContent}
                </div>
            </Dialog>
        </>
    )
}

export default MobileDeposit
