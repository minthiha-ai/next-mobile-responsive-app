import React from 'react';
import Link from 'next/link';
import paths from '@/paths';

const PaymentMethod = () => {
    const payments = [
        { name: "99 Pay", imgSrc: "/mobile_images/icons/deposit/99pay.png", link: paths.instantTopUp() },
        { name: "EZ Pay", imgSrc: "/mobile_images/icons/deposit/ezpay.png", link: paths.instantTopUp() },
        { name: "Berjaya Pay", imgSrc: "/mobile_images/icons/deposit/berjaya.png", link: paths.instantTopUp() },
        { name: "Meta Pay", imgSrc: "/mobile_images/icons/deposit/metapay.png", link: paths.instantTopUp() },
    ];

    return (
        <div className="payment-popup">
            <h3 className="popup-title">Choose Payment Method</h3>
            <div className="payment-options">
                {payments.map((payment, idx) => (
                    <Link key={idx} href={payment.link}>
                        <div className="payment-wrapper">
                            <div className="payment-option">
                                <img src={payment.imgSrc} alt={payment.name} />
                            </div>
                            <span className="payment-name">{payment.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PaymentMethod;
