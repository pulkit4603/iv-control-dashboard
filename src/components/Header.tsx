'use client';

import Image from 'next/image';
import { Timer, User } from 'lucide-react';
import { Popover, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';

export default function Header() {
    return (
        <div className="flex justify-between gap-4 p-6 pb-12 items-center">
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
                <Popover>
                    <PopoverTrigger>
                        <Button variant="ghost" size="icon">
                            <User size={32} className='bg-white p-1 border border-gray-300 shadow-lg rounded-xl' />
                        </Button>
                    </PopoverTrigger>
                </Popover>
                <Popover>
                <PopoverTrigger>
                        <Button variant="ghost" size="icon">
                            <Timer size={32} className='bg-white p-1 border border-gray-300 shadow-lg rounded-xl' />
                        </Button>
                    </PopoverTrigger>
                </Popover>
            </div>
        </div>
    );
}