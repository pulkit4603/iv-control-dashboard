'use client';
import {columns} from './columns';
import { beds } from '@/constants/data';
import { DataTable } from './components/data-table';
import { CustomBreadcrumb } from "@/components/custom-breadcrumb";
import RoomNumberInput from './components/room-number-input';

const breadcrumbItems = {
    fatherLink: "/ivs",
    fatherName: "Beds",
    childName: "All Beds"
}
export default function Page() {
    return (
        <>
        <div className="flex flex-col items-start justify-between p-4 md:p-4">
          <CustomBreadcrumb items={breadcrumbItems} />
        </div>
        <div className="flex p-4">
          <RoomNumberInput />
        </div>
        <div className="flex flex-col items-start justify-start p-4 md:p-4 mx-auto">
          <DataTable columns={columns} data={beds} />
        </div>
      </>
    );
}