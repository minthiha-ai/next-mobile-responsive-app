'use client';
import React, { useState } from 'react';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';

const MobileConvertPage = () => {
    const [fromValue, setFromValue] = useState(1.00);
    const [toValue, setToValue] = useState(0.22);

    const handleConvert = () => {
        console.log("Convert button clicked");
        // Add your conversion logic here
    };

    return (
        <>
            <PageHeader backUrl={paths.wallet()} title="Convert" headerClass="blue-header" arrowColor="black" />
            <div className="convert-wrapper">
                {/* From Conversion */}
                <div className="conversion-section">
                    <div className="conversion-header">From</div>
                    <div className="input-section">
                        <input
                            type="number"
                            value={fromValue}
                            onChange={(e) => setFromValue(e.target.value)}
                            className="conversion-input"
                        />
                        <div className="currency-info">
                            <span className="currency-flag">
                                <img src="/images/flag/malaysia.png" alt="MYR" />
                            </span>
                            <span className="currency-name">MYR</span>
                        </div>
                    </div>
                    <span className="balance-info">Balance: MYR 199,900</span>
                </div>

                {/* To Conversion */}
                <div className="conversion-section">
                    <div className="conversion-header">To</div>
                    <div className="input-section">
                        <input
                            type="number"
                            value={toValue}
                            onChange={(e) => setToValue(e.target.value)}
                            className="conversion-input"
                        />
                        <div className="currency-info">
                            <span className="currency-flag">
                                <img src="/images/flag/usd.png" alt="USD" />
                            </span>
                            <span className="currency-name">USD</span>
                        </div>
                    </div>
                    <span className="balance-info">Balance: USD 1.90</span>
                </div>

                <div className="convert-button-wrapper">
                    <button className="convert-btn" onClick={handleConvert}>Convert</button>
                </div>

                <div className="conversion-info">
                    <p>Exchange rate 1 MYR ~ 0.2127 USD</p>
                    <p>Fee: MYR <span className="fee-amount">0.00</span></p>
                    <p>Rate: <span className="rate-percentage">0.01%</span> (5.00-5.00)</p>
                </div>
            </div>
        </>
    );
};

export default MobileConvertPage;
