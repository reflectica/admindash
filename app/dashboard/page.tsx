"use client"
import React from 'react'
import { AuthenticatedLayout, SectionCard } from '@/components'
import Image from 'next/image'
import morePeople from '@/public/icons/morePeople.png'
import magnifyingIcon from '@/public/icons/magnifyingIcon.png'
import mailIcon from '@/public/icons/mail.png'
import inboxIcon from '@/public/icons/inbox.png'
import profileIcon from '@/public/icons/profile.png'
import addIcon from '@/public/icons/addIcon.png'
import { profileImages } from '@/public/profileicons';
import {formatDate} from '@/utils/formatDate'
import LineDivider from '@/components/LineDivider'
import { tempData } from '@/constants/TempData'

import LineGraph from '@/components/graph/ExampleLineGraph'
export default function Dashboard() {
    // const profileImages = [profile1, profile2, profile3, profile4, profile5, addProfile];
    return (
        <AuthenticatedLayout>
            <div className='w-full flex flex-row'>
                <div className="p-4 w-2/3">
                    <div className='flex flex-row justify-between items-center'>
                        <h1 className="text-2xl font-extrabold leading-8 text-gray-800">Welcome! 👋</h1>
                        <form className='flex flex-row bg-gray-100 rounded-lg items-center'>
                            <div className="pl-3 pr-2">
                                <Image src={magnifyingIcon} width={16} height={16} alt='Search' />
                            </div>
                            <input 
                                type="text"
                                id="inputField"
                                name="inputName"
                                placeholder="Search"
                                className="block w-full pl-1 pr-3 py-2 bg-transparent focus:outline-none"
                            />
                        </form>
                    </div>
                    {/* Section goes here */}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                        <SectionCard title={'Team Usage'} containerStyle={'p-4 col-span-1 md:col-span-2 lg:col-span-4'}>
                            <div className='flex flex-row justify-between items-center'>
                                <span 
                                    className='bg-custom-usage-gray w-20 h-5 overflow-hidden rounded-xl text-white font-extrabold text-sm leading-2 text-center '
                                >
                                    Usage (Min)
                                </span>
                                <div className='flex flex-row items-center gap-1'>
                                    <label htmlFor="filter" className=''>Sort by</label>
                                    <select id='filter' name="options" aria-label="Options" className="bg-gray-100 rounded-lg p-2">
                                        <option value="month">Month</option>
                                        <option value="month">Week</option>
                                        <option value="month">Year</option>
                                    </select>
                                </div>
                            </div>
                            <LineGraph />
                        </SectionCard>
                        <SectionCard title={"Clinical Referals"} containerStyle={'p-4 col-span-1 md:col-span-2 lg:col-span-2'}>
                            {tempData.slice(0, 4).map((data: any, i: number) => (
                                <div key={i} className='flex flex-row gap-2 items-center justify-around'>
                                    <div className='bg-custom-blue w-14 h-14 rounded-md flex items-center justify-center'>
                                        <Image src={addIcon} width={30} height={30} alt='AddIcon'/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-black text-sm font-extrabold leading-3'>Appointment Set</p>
                                        <p className='text-light-grey text-xs font-medium leading-2'>
                                            {formatDate(data.date, data.time)}
                                        </p>
                                    </div>
                                    <p className='text-black text-sm font-extrabold leading-3'>#{data.id}</p>
                                </div>
                            ))}
                        </SectionCard>

                        <SectionCard title={"Team Mental Health Score"} containerStyle={'p-4 col-span-1 md:col-span-2 lg:col-span-2'}>
                            <p className='text-xs font-medium leading-2 text-center'>Average Score</p>
                            {/* TEMP HARD CODED SCORE */}
                            <p className='text-5xl text-black text-center font-extrabold leading-10'>8.4</p>

                            {/* FILTER FEATURE */}
                            <ul className='flex flex-row text-xs justify-center gap-2'>
                                <li>Day</li>
                                <li>Week</li>
                                <li>Month</li>
                                <li>Year</li>
                            </ul>

                            <LineGraph />
                        </SectionCard>

                    </div>
                </div>
                <div className='h-screen w-1/3 border-l border-gray-300'>
                    <div className='flex flex-row justify-end p-5 m-5 gap-5'>
                        <Image src={mailIcon} width={30} height={30} alt='mail icon' />
                        <Image src={inboxIcon} width={30} height={30} alt='inbox icon' />
                        <Image src={profileIcon} width={30} height={30} alt='profile icon' />
                    </div>

                    <SectionCard 
                        title={"Estimated Employee Productivity Boost"} 
                        containerStyle={'flex flex-col m-10 text-center'}
                    >
                        <p className='font-medium text-xs leading-2 text-gray-300'>This month you saved</p>
                        {/* Temporarily hard coded information */}
                        <p className='font-medium text-4xl leading-3 text-black my-3'>$12,281</p>
                        <p className='font-medium text-xs leading-2 text-gray-300'>Calculated from employee salaries x estimated added productivity value. </p>
                        <div className="">
                            {/* GRAPH GOES HERE */}
                        </div>
                    </SectionCard>
                    <SectionCard 
                        title={"Purchase More Licenses"} 
                        containerStyle={"flex flex-col m-10 text-center gap-2"}
                    >
                        <div className='flex flex-row items-center gap-1'>
                            <Image src={morePeople} width={13} height={13} alt='more people icon' />
                            <p className='text-custom-license-gray text-xs leading-2 font-medium'>Purchase more licenses for your team</p>
                        </div>
                        <div className='flex flex-row justify-center gap-2'>
                            <p className='text-4xl text-black font-extrabold leading-9'>$2000</p>
                            <button 
                                type='button' 
                                className='w-28 h-9 bg-custom-blue text-white rounded-md text-xs font-extrabold leading-2'
                            >
                                Buy 10
                            </button>
                        </div>
                        <LineDivider style={''}/>
                        <div className='flex flex-row'>
                            {profileImages.map((image, index) => (
                                <div 
                                    key={index}
                                    className={`w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white ${
                                        index !== 0 ? '-ml-5 md:-ml-8' : ''
                                    }`}
                                >
                                    <Image src={image} width={30} height={30} alt={`Profile ${index + 1}`} className="object-cover rounded-full" />
                                </div>
                            ))}
                        </div>
                    </SectionCard>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
