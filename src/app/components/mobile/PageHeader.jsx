import React from 'react'
import { IconChevronLeft } from '@tabler/icons-react';
import Link from 'next/link';

const PageHeader = ({ backUrl, title, headerClass = "header", arrowColor = "black" }) => {
    return (
        <header className={headerClass}>
            <Link href={backUrl} className="back-button"><IconChevronLeft color={arrowColor} size={32} /></Link>
            <div className="logo">{title}</div>
            <span className="white-space"></span>
        </header>
    )
}

export default PageHeader
