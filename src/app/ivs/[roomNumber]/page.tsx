'use client';
import {columns} from './columns';
import { beds } from '@/constants/data';
import { DataTable } from '../components/data-table';
import { CustomBreadcrumb } from "@/components/custom-breadcrumb";
import RoomNumberInput from '../components/room-number-input';

export default function Page({params,}: {params: {roomNumber: number}}) {
    const newBeds = beds.filter(bed => bed.roomNumber === Number(params.roomNumber));
    const breadcrumbItems = {
        fatherLink: "/ivs",
        fatherName: "Beds",
        childName: `Room ${params.roomNumber}`
    }

    return (
        <>
        <div className="flex flex-col items-start justify-between p-4 md:p-4">
          <CustomBreadcrumb items={breadcrumbItems} />
        </div>
        <div className="flex p-4">
          <RoomNumberInput />
        </div>
        <div className="flex flex-col items-start justify-start p-4 md:p-4 mx-auto">
          <DataTable columns={columns} data={newBeds} />
        </div>
      </>
    );
}