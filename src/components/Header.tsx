'use client';

import Image from 'next/image';
import { Timer, User } from 'lucide-react';
import { CommandItem } from './ui/command';

export default function Header() {
    return (
        <div className="flex justify-between gap-4 p-6 items-center">
            <div className="w-24 h-9 sm:w-28 sm:h-10.5 md:w-32 md:h-11.9">
            <button>
            <Image
                src="/assetHospitalLogo.svg" 
                alt="Hospital" 
                width={24}
                height={9}
                layout="responsive"
            />
            </button>
            </div>
            <div className="flex gap-2">
                <button>
                <User size={32} className='bg-white p-1 border border-gray-300 shadow-lg rounded-xl' />
                </button>
                <button>
                <Timer size={32} className='bg-white p-1 border border-gray-300 shadow-lg rounded-xl' />
                </button>
            </div>
        </div>
    );
}