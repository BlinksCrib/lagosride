'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function Foot() {
	return (
		<>
			<div className='w-full bg-[#2c2c2c]'>
				<div className='max-w-6xl mx-auto p-4 py-20'>
					<div className='grid grid-cols-1 sm:grid-cols-2 slg:grid-cols-3 '>
						<div className='grid gap-4 items-center justify-center'>
							{/* logo */}
							<Link href={''}>
								<img className='w-[10rem]' src='/logo.png' alt='' />
							</Link>
							<h1 className='text-[#FFFFFF]'>
								We believe your transit moments should offer some comfort, a
								good time to relax and unwind from work. As Lagosians, we do
								things by ourselves, but we know it is great to have someone
								tend to you while you are on the move...{' '}
							</h1>
							<p className='text-sm text-[#F8F8F8]'>Powered by Zeno </p>
						</div>

						<div className='grid mt-10 md:mt-0 sm:items-center sm:justify-center text-white'>
							<Link href={''}>EXPLORE</Link>
							<h1 className=''>How it works</h1>
							<h1 className=''>Partners</h1>
							<h1 className=''>Help & FAQ</h1>
							<h1 className=''>Privacy policy</h1>
							<h1 className=''>About Zeno</h1>
						</div>

						<div className=' mt-10 slg:mt-0 flex flex-col gap-5 text-white'>
							<Link href={''}>CONTACT US</Link>
							<h1 className=''>
								House 62, Kajola, 64 Campbell St, Lagos state
							</h1>
							<h1 className=''>(+234) 909 000 0793</h1>
							<p className=''>support@lagosride.com </p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
