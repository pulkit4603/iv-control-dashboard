'use client';

import Image from 'next/image';
import { Timer, User } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import Link from 'next/link';

export default function Header() {
    return (
        <div className="flex justify-between gap-4 p-6 pb-12 items-center">
            <div className="w-24 h-9 sm:w-28 sm:h-10.5 md:w-32 md:h-11.9">
            <Link href="/">
                <Image
                    src="/assetHospitalLogo.svg" 
                    alt="Hospital" 
                    width={24}
                    height={9}
                    layout="responsive"
                />
            </Link>
            </div>
            <div className="flex gap-2">
                <Popover>
                    <PopoverTrigger>
                        <Button variant="ghost" size="icon">
                            <User size={32} className='bg-white p-1 border border-gray-300 shadow-lg rounded-xl' />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className='w-15'>
                        <div className="flex flex-col p-1 items-center">
                            <Link href="/profile">
                                <Button variant="ghost" size="sm">Profile</Button>
                            </Link>
                            <Link href="/settings">
                                <Button variant="ghost" size="sm">Settings</Button>
                            </Link>
                            <Link href="/logout">
                                <Button variant="ghost" size="sm">Logout</Button>
                            </Link>
                        </div>
                    </PopoverContent>
                </Popover>
                <Popover>
                    <PopoverTrigger>
                        <Link href="/ivs/active">
                            <Button variant="ghost" size="icon">
                                <Timer size={32} className='bg-white p-1 border border-gray-300 shadow-lg rounded-xl' />
                            </Button>
                        </Link>
                    </PopoverTrigger>
                </Popover>
            </div>
        </div>
    );
}