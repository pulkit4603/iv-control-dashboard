'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Timer, User } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
import Link from 'next/link';
import { pagePaths } from '@/constants/data';



export default function Header() {
    const router = useRouter();

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
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className='h-[2.3rem] w-[2.3rem] p-1 scale-100 bg-white border border-gray-200 shadow-xl rounded-2xl'>
                            <User size={32} className='p-1' />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='center'>
                            <DropdownMenuItem onClick={() => router.push(pagePaths.profilePage)} className='cursor-pointer'>
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => router.push(pagePaths.settingsPage)} className='cursor-pointer'>
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => router.push(pagePaths.logoutPage)} className='cursor-pointer'>
                                Logout
                            </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="ghost" size="icon" onClick={() => router.push(pagePaths.activeIvsPage)} className='h-[2.3rem] w-[2.3rem] p-1 scale-100 bg-white border border-gray-200 shadow-xl rounded-2xl'>
                    <Timer size={32} className='p-1' />
                </Button>
            </div>
        </div>
    );
}