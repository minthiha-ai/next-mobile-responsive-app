'use client';
import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';
import { IconSearch, IconUserPlus } from '@tabler/icons-react';
import Link from 'next/link';

// Dummy contacts sorted alphabetically
const dummyContacts = [
    { name: 'Paul C. Ramos', uid: '******', avatar: '/mobile_images/contacts/paul.png', letter: 'P' },
    { name: 'Boampong', uid: '******', avatar: '/mobile_images/contacts/addai.png', letter: 'B' },
    { name: 'Akua', uid: '******', avatar: '/mobile_images/contacts/jack.png', letter: 'A' },
    { name: 'Addai', uid: '******', avatar: '/mobile_images/contacts/addai.png', letter: 'A' },
    { name: 'Adiza Salifu', uid: '******', avatar: '/mobile_images/contacts/jackson.png', letter: 'A' },
    { name: 'Ampongsah', uid: '******', avatar: '/mobile_images/contacts/paul.png', letter: 'A' },
    { name: 'Bisa K Dei', uid: '******', avatar: '/mobile_images/contacts/jack.png', letter: 'B' },
    { name: 'Cynthia Osei', uid: '******', avatar: '/mobile_images/contacts/addai.png', letter: 'C' },
    { name: 'Daniel Ade', uid: '******', avatar: '/mobile_images/contacts/jackson.png', letter: 'D' },
    { name: 'Emmanuel Baah', uid: '******', avatar: '/mobile_images/contacts/paul.png', letter: 'E' },
    { name: 'Frank Boateng', uid: '******', avatar: '/mobile_images/contacts/addai.png', letter: 'F' },
    { name: 'George Annan', uid: '******', avatar: '/mobile_images/contacts/jackson.png', letter: 'G' },
    { name: 'Helen Kofi', uid: '******', avatar: '/mobile_images/contacts/jack.png', letter: 'H' },
    { name: 'Isaac Oppong', uid: '******', avatar: '/mobile_images/contacts/addai.png', letter: 'I' },
    { name: 'James Doe', uid: '******', avatar: '/mobile_images/contacts/jackson.png', letter: 'J' },
    { name: 'Kwame Addo', uid: '******', avatar: '/mobile_images/contacts/paul.png', letter: 'K' },
    { name: 'Lydia Amponsah', uid: '******', avatar: '/mobile_images/contacts/jack.png', letter: 'L' },
    { name: 'Mary Ofori', uid: '******', avatar: '/mobile_images/contacts/paul.png', letter: 'M' },
    { name: 'Nana Asare', uid: '******', avatar: '/mobile_images/contacts/addai.png', letter: 'N' },
    { name: 'Oscar Mensah', uid: '******', avatar: '/mobile_images/contacts/jackson.png', letter: 'O' },
    { name: 'Queen Osei', uid: '******', avatar: '/mobile_images/contacts/paul.png', letter: 'Q' },
    { name: 'Richmond Owusu', uid: '******', avatar: '/mobile_images/contacts/addai.png', letter: 'R' },
    { name: 'Sofia Mensah', uid: '******', avatar: '/mobile_images/contacts/jack.png', letter: 'S' },
    { name: 'Theresa Appiah', uid: '******', avatar: '/mobile_images/contacts/addai.png', letter: 'T' },
    { name: 'Umar Yakubu', uid: '******', avatar: '/mobile_images/contacts/jack.png', letter: 'U' },
    { name: 'Victor Ampofo', uid: '******', avatar: '/mobile_images/contacts/jackson.png', letter: 'V' },
    { name: 'William Addae', uid: '******', avatar: '/mobile_images/contacts/addai.png', letter: 'W' },
    { name: 'Yaa Korkor', uid: '******', avatar: '/mobile_images/contacts/paul.png', letter: 'Y' },
    { name: 'Zachary Annan', uid: '******', avatar: '/mobile_images/contacts/jack.png', letter: 'Z' }
].sort((a, b) => a.letter.localeCompare(b.letter));  // Sort alphabetically by letter

// Group by letter
const groupByLetter = dummyContacts.reduce((acc, contact) => {
    const letter = contact.letter;
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(contact);
    return acc;
}, {});

const MobileContactPage = () => {
    return (
        <>
            <PageHeader backUrl={paths.home()} title="Contact" headerClass="header" arrowColor="black" icon={<IconUserPlus color="blue" />} />
            {/* Search Contacts */}
            <div className="search-contacts">
                <h2>Friends</h2>
                <TextField
                    placeholder="Search contacts"
                    fullWidth
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconSearch size={32} color='green' />
                            </InputAdornment>
                        ),
                        className: 'search-input',
                    }}
                />
            </div>
            <div className="contact-page">
                {/* Alphabetical Scroll */}
                <div className="alphabet-scroll">
                    <ul>
                        {Object.keys(groupByLetter).map((letter) => (
                            <li key={letter}>{letter}</li>
                        ))}
                    </ul>
                </div>

                {/* Friends Section */}
                <div className="friends-section">
                    {Object.keys(groupByLetter).map((letter) => (
                        <div key={letter} className="contact-group">
                            <h3>{letter}</h3>
                            <ul className="contact-list">
                                {groupByLetter[letter].map((contact) => (
                                    <Link key={contact.name} href={paths.contactDetail()}>
                                        <li className="contact-item" >
                                            <img src={contact.avatar} alt={contact.name} className="contact-avatar" />
                                            <div className="contact-info">
                                                <h4>{contact.name}</h4>
                                                <p>UID: {contact.uid}</p>
                                            </div>
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div >
        </>
    );
};

export default MobileContactPage;
