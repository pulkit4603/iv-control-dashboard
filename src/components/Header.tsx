'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Timer, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import Link from 'next/link';
import { pagePaths } from '@/constants/data';

export default function Header() {
  const router = useRouter();

  return (
    <div className='flex items-center justify-between gap-4 p-6 pb-12'>
      <div className='sm:h-10.5 md:h-11.9 h-9 w-24 sm:w-28 md:w-32'>
        <Link href='/'>
          <Image
            src='/assetHospitalLogo.svg'
            alt='Hospital'
            width={24}
            height={9}
            layout='responsive'
          />
        </Link>
      </div>
      <div className='flex gap-2'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className='h-[2.3rem] w-[2.3rem] scale-100 rounded-2xl border border-gray-200 bg-white p-1 shadow-xl'
            >
              <User size={32} className='p-1' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='center'>
            <DropdownMenuItem
              onClick={() => router.push(pagePaths.profilePage)}
              className='cursor-pointer'
            >
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push(pagePaths.settingsPage)}
              className='cursor-pointer'
            >
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push(pagePaths.logoutPage)}
              className='cursor-pointer'
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant='ghost'
          size='icon'
          onClick={() => router.push(pagePaths.activeIvsPage)}
          className='h-[2.3rem] w-[2.3rem] scale-100 rounded-2xl border border-gray-200 bg-white p-1 shadow-xl'
        >
          <Timer size={32} className='p-1' />
        </Button>
      </div>
    </div>
  );
}
