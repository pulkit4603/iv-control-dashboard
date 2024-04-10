'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {columns} from './columns';
import { beds, rooms } from '@/constants/data';
import { DataTable } from '../data-table';
import { CustomBreadcrumb } from "@/components/custom-breadcrumb";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';


export default function Page({params,}: {params: {roomNumber: number}}) {
    const newBeds = beds.filter(bed => bed.roomNumber === Number(params.roomNumber));
    const breadcrumbItems = {
        fatherLink: "/ivs",
        fatherName: "Beds",
        childName: `Room ${params.roomNumber}`
    } 
    const router = useRouter();
    const [roomNumber, setRoomNumber] = useState(Math.min(...rooms));

    const handleSubmit = (event: any) => {
        event.preventDefault();
        router.push(`/ivs/${roomNumber}`);
    };

    return (
        <>
        <div className="flex flex-col items-start justify-between p-4 md:p-4">
          <CustomBreadcrumb items={breadcrumbItems} />
        </div>
        <div className="flex items-center justify-normal p-4 md:p-4 text-[1rem] text-gray-600">
          {/* <div className='p-2'>Room Number:</div> */}
          <form onSubmit={handleSubmit} className="flex items-center justify-normal p-4 md:p-4 text-[1rem] text-gray-600">
          <Label className='p-2' htmlFor="email">Room Number</Label>
          <Input
            id="stock-1"
            className='w-24 h-8 p-4'
            type="number"
            defaultValue={Number(params.roomNumber)}
            onChange={(e) => setRoomNumber(Number(e.target.value))}
          />
          {/* <Button variant="ghost" size="icon" type="submit"  className='w-6 h-6'><Check size={16}/></Button> */}
          </form>
        </div>
        <div className="flex flex-col items-start justify-start p-4 md:p-4 mx-auto">
          <DataTable columns={columns} data={newBeds} />
        </div>
      </>
    );
}