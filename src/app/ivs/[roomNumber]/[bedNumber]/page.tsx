"use client";
import { beds, Bed } from "@/constants/data";
import { CustomBreadcrumb } from "@/components/custom-breadcrumb";
import AboutPatientTile from "./components/about-patient-tile";
import MedicineSelectionTable from "./components/medicine-selection-table";

function getBedByNumberAndRoom(
  beds: Bed[],
  bedNumber: number,
  roomNumber: number
): Bed | undefined {
  return beds.find(
    (bed) => bed.bedNumber === bedNumber && bed.roomNumber === roomNumber
  );
}

export default function page({
  params,
}: {
  params: { bedNumber: string; roomNumber: string };
}) {
  const bedData = getBedByNumberAndRoom(
    beds,
    Number(params.bedNumber),
    Number(params.roomNumber)
  );
  const breadcrumbItems = {
    fatherLink: `/ivs/${params.roomNumber}`,
    fatherName: `Room ${params.roomNumber}`,
    childName: `Bed ${params.bedNumber}`,
  };

  return (
    <>
      <div className="flex flex-col items-start justify-between p-4 md:p-4">
        <CustomBreadcrumb items={breadcrumbItems} />
      </div>
      <div className="flex flex-col items-start justify-start rounded-lg p-4 gap-4">
        <div className="flex flex-grow items-center justify-between min-w-full p-2 rounded-3xl backdrop-brightness-110">
          <AboutPatientTile />
        </div>
        <div className="flex flex-grow items-center justify-between min-w-full p-2 gap-4 rounded-3xl backdrop-brightness-110">
          <div>
            <MedicineSelectionTable />
          </div>
          <div>Hello</div>
        </div>
      </div>
    </>
  );
}
