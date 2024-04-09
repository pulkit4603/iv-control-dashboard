'use client';

import { CustomBreadcrumb } from "@/components/custom-breadcrumb";

const breadcrumbItems = {
    fatherLink: "/ivs",
    fatherName: "Beds",
    childName: "All Beds"
}
export default function page() {
    return (
        <>
        <div className="flex p-4 md:p-4">
          <CustomBreadcrumb items={breadcrumbItems} />
          {/* <UserClient data={users} /> */}
        </div>
      </>
    );
}