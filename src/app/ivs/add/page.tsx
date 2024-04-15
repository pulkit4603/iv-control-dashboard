"use client";

import { CustomBreadcrumb } from "@/components/custom-breadcrumb";

const breadcrumbItems = {
  fatherLink: "/ivs",
  fatherName: "Beds",
  childName: "Connect New",
};
export default function IvsAdd() {
  return (
    <div className="flex p-4 md:p-4">
      <CustomBreadcrumb items={breadcrumbItems} />
    </div>
  );
}
