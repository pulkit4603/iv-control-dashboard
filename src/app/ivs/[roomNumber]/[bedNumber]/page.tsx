"use client";
import { beds, Bed } from "@/constants/data";
import {
  CustomBreadcrumb,
  CustomBreadcrumbItems,
} from "@/components/custom-breadcrumb";
import AboutPatientTile from "./components/about-patient-tile";
import MedicineSelectionTable from "./components/medicine-selection-table";
import FlowrateSelector from "./components/flowrate-selector";
import { useState } from "react";
// import DurationInput from "./components/duration-input";
interface PageProps {
  params: {
    bedNumber: string;
    roomNumber: string;
  };
}

type MedicineFormData = {
  medicine: string;
};

function getBedByNumberAndRoom(
  beds: Bed[],
  bedNumber: number,
  roomNumber: number
): Bed | undefined {
  return beds.find(
    (bed) => bed.bedNumber === bedNumber && bed.roomNumber === roomNumber
  );
}

export default function Page({ params }: PageProps) {
  const [medicineFormData, setMedicineFormData] =
    useState<MedicineFormData | null>(null);

  const [flowrateFormData, setFlowrateFormData] = useState([0.5]);

  const [submittedDuration, setSubmittedDuration] = useState({});

  function handleDurationSubmit(duration: any) {
    setSubmittedDuration(duration);
  }

  const bedData = getBedByNumberAndRoom(
    beds,
    parseInt(params.bedNumber),
    parseInt(params.roomNumber)
  );

  const breadcrumbItems: CustomBreadcrumbItems["items"] = {
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
        <div className="flex flex-grow items-center justify-start min-w-full p-2 gap-4 rounded-3xl backdrop-brightness-110">
          <div className="p-4">
            <MedicineSelectionTable setMedicineFormData={setMedicineFormData} />
          </div>
          <div className="p-4">
            <FlowrateSelector
              value={flowrateFormData}
              onValueChange={setFlowrateFormData}
            />
          </div>
          {/* <div className="p-4">
            <DurationInput onDurationSubmit={handleDurationSubmit} />
          </div> */}

          {/*results div*/}
          {/* {medicineFormData && (
            <div className="p-4">{medicineFormData?.medicine}</div>
          )}
          {flowrateFormData && (
            <div className="p-4">{flowrateFormData} ml/hr</div>
          )} */}
          {/* {submittedDuration && (
            <div className="p-4">{submittedDuration?.hours} hours</div>
          )} */}
          <div className="flex min-h-24 p-4 items-center justify-end gap-4 rounded-2xl bg-white shadow-md">
            {medicineFormData && (
              <div className="p-4">
                <p className="font-bold pb-2">Medicine:</p>{" "}
                {medicineFormData?.medicine}
              </div>
            )}
            {flowrateFormData && (
              <div className="p-4">
                <p className="font-bold pb-2">Flow Rate:</p>
                {flowrateFormData} ml/hr
              </div>
            )}
          </div>
        </div>
        {/* <div className="flex flex-grow min-h-24 p-4 items-center justify-normal gap-4 rounded-2xl bg-white shadow-md">
          {medicineFormData && (
            <div className="p-4">
              <p className="font-bold pb-2">Medicine:</p>{" "}
              {medicineFormData?.medicine}
            </div>
          )}
          {flowrateFormData && (
            <div className="p-4">
              <p className="font-bold pb-2">Flow Rate:</p>
              {flowrateFormData} ml/hr
            </div>
          )}
        </div> */}
      </div>
    </>
  );
}
