import Link from 'next/link';
import { title } from 'process';
import React from 'react'

export default function Header() {
    const linkContent = [
        {
            title: 'Home',
            href: '#hero'
        },
        {
            title: 'About',
            href : '#about'
        },
        {
            title: 'Skills',
            href : '#skills'
        },
        {
            title: 'Projects',
            href : '#projects'  
        },
        {
            title: 'Contact',
            href : '#contact'
        }
    ]
    return (
        <header>
        <div className="logo">&lt;/ARDIMINDA&gt;</div>
        <nav>
            <ul>
            {linkContent.map((link, index) => (
                <Link key={index} href={link.href}>
                <li>{link.title}</li>
                </Link>
                ))}
            </ul>
        </nav>
        </header>
    );
}
