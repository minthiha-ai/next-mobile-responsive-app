import React from 'react';
import Link from 'next/link';
import paths from '@/paths';

const banks = [
    { name: 'Public Bank', imgSrc: '/mobile_images/icons/deposit/public-bank.png', link: paths.bankTransfer() },
    { name: 'MayBank', imgSrc: '/mobile_images/icons/deposit/maybank.png', link: paths.bankTransfer() },
    { name: 'Affin Bank', imgSrc: '/mobile_images/icons/deposit/affin-bank.png', link: paths.bankTransfer() },
    { name: 'OCBC Bank', imgSrc: '/mobile_images/icons/deposit/ocbc-bank.png', link: paths.bankTransfer() },
    { name: 'RHB Bank', imgSrc: '/mobile_images/icons/deposit/rhb-bank.png', link: paths.bankTransfer() },
    { name: 'HSBC Bank', imgSrc: '/mobile_images/icons/deposit/hsbc-bank.png', link: paths.bankTransfer() },
    { name: 'Hong Leong Bank', imgSrc: '/mobile_images/icons/deposit/hong-leong-bank.png', link: paths.bankTransfer() },
    { name: 'CIMB Bank', imgSrc: '/mobile_images/icons/deposit/cimb-bank.png', link: paths.bankTransfer() }
];

const BankList = () => {
    return (
        <div className="bank-popup">
            <h3 className="popup-title">Choose Bank</h3>
            <div className="bank-options">
                {banks.map((bank, idx) => (
                    <Link key={idx} href={bank.link}>
                        <div className="bank-wrapper">
                            <div className="bank-option">
                                <img src={bank.imgSrc} alt={bank.name} />
                            </div>
                            <span className="bank-name">{bank.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BankList;
