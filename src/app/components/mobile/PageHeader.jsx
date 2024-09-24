import React from 'react'
import { IconChevronLeft } from '@tabler/icons-react';
import Link from 'next/link';

const PageHeader = ({ backUrl, title, headerClass = "header", arrowColor = "black", icon = '' }) => {
    return (
        <header className={headerClass}>
            <Link href={backUrl} className="back-button"><IconChevronLeft color={arrowColor} size={32} /></Link>
            <div className="logo">{title}</div>
            <div className="whit-space">{icon}</div>
        </header>
    )
}

export default PageHeader
