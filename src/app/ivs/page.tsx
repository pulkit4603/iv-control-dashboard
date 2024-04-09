'use client';

import {columns} from './columns';
import { Bed, beds } from '@/constants/data';
import { DataTable } from './data-table';
import { CustomBreadcrumb } from "@/components/custom-breadcrumb";

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
        <div className="flex flex-col items-start justify-start p-4 md:p-4 mx-auto">
          {/* <UserClient data={users} /> */}
          <DataTable columns={columns} data={beds} />
        </div>
      </>
    );
}