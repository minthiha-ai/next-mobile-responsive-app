import React from 'react'
import { IconChevronLeft } from '@tabler/icons-react';
import Link from 'next/link';

const PageHeader = ({ backUrl, title }) => {
    return (
        <header className="header">
            <Link href={backUrl} className="back-button"><IconChevronLeft size={32} /></Link>
            <div className="logo">{title}</div>
            <span className="white-space"></span>
        </header>
    )
}

export default PageHeader
