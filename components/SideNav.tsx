import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import overviewIcon from '@/public/icons/overviewIcon.png'
import analyticsIcon from '@/public/icons/analyticsIcon.png'
import clinicIcon from '@/public/icons/clinicIcon.png'
import licensesIcon from '@/public/icons/licenseIcon.png'
import helpIcon from '@/public/icons/helpIcon.png'
import communityIcon from '@/public/icons/communityIcon.png'
import settingsIcon from '@/public/icons/settingsIcon.png'
import logoutIcon from '@/public/icons/logoutIcon.png'

interface SideNavProps {
    showNav:boolean;
    setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideNav({ showNav, setShowNav }: SideNavProps) {
    const toggleNav = () => setShowNav(!showNav);

    return (
        <div className="fixed top-0 left-0 h-full z-10">
            <button
                onClick={toggleNav}
                className={`absolute top-1/2 z-30 bg-blue-500 text-white p-2 rounded-full 
                            transform -translate-y-1/2 transition-transform duration-300 ease-in-out
                            ${showNav ? 'left-64' : 'left-0'}`}
                aria-label="Toggle Navigation"
            >
                <i className={`fas ${showNav ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
            <nav 
                className={`${showNav ? 'translate-x-0' : '-translate-x-full'}
                absolute top-0 left-0 w-64 h-full
                border-r border-gray-300
                transition-transform duration-300 ease-in-out`}
            >
                <ul className='p-5'>
                    <Link href='/dashboard'>
                        <li className="flex flex-row py-4 hover:bg-gray-700">
                            Reflectica x Client Logo
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className="flex flex-row py-4 hover:bg-gray-700">
                            <Image src={overviewIcon} height={20} width={20} className="mr-2" alt="overviewIcon" />Overview
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className="flex flex-row py-4 hover:bg-gray-700">
                            <Image src={analyticsIcon} height={20} width={20} className="mr-2" alt="analyticsIcon" />Analytics
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className="flex flex-row py-4 hover:bg-gray-700">
                            <Image src={clinicIcon} height={20} width={20} className="mr-2" alt="clinicIcon" />Clinic Referrals
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className="flex flex-row py-4 hover:bg-gray-700">
                            <Image src={licensesIcon} height={20} width={20} className="mr-2" alt="licensesIcon" />Licenses
                        </li>
                    </Link>

                    <li className="border-t border-gray-300 my-4"></li>

                    <Link href='/'>
                        <li className="flex flex-row py-4 hover:bg-gray-700">
                            <Image src={helpIcon} height={20} width={20} className="mr-2" alt="helpIcon" />Help Center
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className="flex flex-row py-4 hover:bg-gray-700">
                            <Image src={communityIcon} height={20} width={20} className="mr-2" alt="communityIcon" />Community
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className="flex flex-row py-4 hover:bg-gray-700">
                            <Image src={settingsIcon} height={20} width={20} className="mr-2" alt="settingsIcon" />Settings
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className="flex flex-row py-4 hover:bg-gray-700">
                            <Image src={logoutIcon} height={20} width={20} className="mr-2" alt="logoutIcon" />Logout
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
