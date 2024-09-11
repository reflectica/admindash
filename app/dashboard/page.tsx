import React from 'react'
import { AuthenticatedLayout, LineGraph } from '@/components'
import Image from 'next/image'
import magnifyingIcon from '@/public/icons/magnifyingIcon.png'
import mailIcon from '@/public/icons/mail.png'
import inboxIcon from '@/public/icons/inbox.png'
import profileIcon from '@/public/icons/profile.png'

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <div className='w-full flex flex-row'>
                <div className="p-4 w-2/3">
                    <div className='flex flex-row justify-between items-center'>
                        <h1 className="text-2xl font-bold text-gray-800">Welcome! 👋</h1>
                        <form className='flex flex-row bg-gray-300 rounded-lg'>
                            <Image src={magnifyingIcon} width={19}  alt='Search' />
                            <input 
                                type="text"
                                id="inputField"
                                name="inputName"
                                placeholder="Search"
                                className="block w-full pl-3 pr-3 py-2 bg-transparent focus:outline-none"
                            />
                        </form>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">   
                        <>
                            <h2 className="text-lg font-semibold text-gray-700">Team Usage</h2>
                            <div className="bg-white shadow rounded-lg p-4 col-span-1 md:col-span-2 lg:col-span-3">
                                <LineGraph />

                            </div>
                        </>                 
                        <div className='flex flex-col'>
                            <h2 className="text-lg font-semibold text-gray-700">Clinical Referals</h2>
                            <div className="bg-white shadow rounded-lg p-4">
                                <p className="text-gray-900 text-xl">
                                    {/* GRAPH GOES HERE */}
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <h2 className="text-lg font-semibold text-gray-700">Team Mental Health Score</h2>
                            <div className="bg-white shadow rounded-lg p-4">
                                <LineGraph />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-screen w-1/3 border-l border-gray-300'>
                    <div className='flex flex-row justify-end p-5 m-5 gap-5'>
                        <Image src={mailIcon} width={30} height={30} alt='mail icon' />
                        <Image src={inboxIcon} width={30} height={30} alt='inbox icon' />
                        <Image src={profileIcon} width={30} height={30} alt='profile icon' />
                    </div>
                    <div className='h-3/6 flex flex-col m-10 text-center'>
                        <p className="font-extrabold text-sm leading-3 text-black my-2">Estimated Employee Productivity Boost</p>
                        <div className='bg-white shadow rounded-lg p-4 gap-5 flex flex-col'>
                            <p className='font-medium text-xs leading-2 text-gray-300'>This month you saved</p>
                            {/* Temporarily hard coded information */}
                            <p className='font-medium text-4xl leading-3 text-black'>$12,281</p>
                            <p className='font-medium text-xs leading-2 text-gray-300'>Calculated from employee salaries x estimated added productivity value. </p>
                            <div className="">
                                {/* GRAPH GOES HERE */}
                            </div>
                        </div>
                    </div>

                    <div className='h-2/6 flex flex-col m-10'>
                        <h2 className="text-md font-semibold text-gray-700 my-2 text-center">Purchase More Licenses</h2>
                        <div className="bg-white shadow rounded-lg p-4">
                            {/* GRAPH GOES HERE */}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
