import React from 'react'

const WalletCard = () => {
    return (
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
    )
}

export default WalletCard
