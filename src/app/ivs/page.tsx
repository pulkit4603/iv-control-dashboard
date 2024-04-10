'use client';

import {columns} from './columns';
import { beds, rooms } from '@/constants/data';
import { DataTable } from './data-table';
import { CustomBreadcrumb } from "@/components/custom-breadcrumb";
import { Input } from '@/components/ui/input';

const breadcrumbItems = {
    fatherLink: "/ivs",
    fatherName: "Beds",
    childName: "All Beds"
}
export default function page() {
    return (
        <>
        <div className="flex flex-col items-start justify-between p-4 md:p-4">
          <CustomBreadcrumb items={breadcrumbItems} />
        </div>
        <div className="flex items-center justify-normal p-4 md:p-4 text-[1rem] text-gray-600">
          <div className='p-2'>Room Number:</div>
          <Input
            id="stock-1"
            className='w-24 h-8 p-4'
            type="number"
            defaultValue={Math.min(...rooms)}
          />
        </div>
        <div className="flex flex-col items-start justify-start p-4 md:p-4 mx-auto">
          <DataTable columns={columns} data={beds} />
        </div>
      </>
    );
}