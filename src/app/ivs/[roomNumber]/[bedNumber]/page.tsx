'use client';
import { beds, Bed } from "@/constants/data";
import Image from "next/image";
import { CustomBreadcrumb } from "@/components/custom-breadcrumb";

function getBedByNumberAndRoom(beds: Bed[], bedNumber: number, roomNumber: number): Bed | undefined {
    return beds.find(bed => bed.bedNumber === bedNumber && bed.roomNumber === roomNumber);
  }

export default function page({params,} : {params: {bedNumber: string, roomNumber: string,},}) {
    const bedData = getBedByNumberAndRoom(beds, Number(params.bedNumber), Number(params.roomNumber));
    const breadcrumbItems = {
        fatherLink: `/ivs/${params.roomNumber}`,
        fatherName: `Room ${params.roomNumber}`,
        childName: `Bed ${params.bedNumber}`
    } 

    return (
        <>
        <div className="flex flex-col items-start justify-between p-4 md:p-4">
            <CustomBreadcrumb items={breadcrumbItems} />
        </div>
        
        <div className="flex flex-col items-start justify-start border border-black">
            <div>
                <div className="text-2xl">Bed Number: {params.bedNumber}</div>
                <div className="text-2xl">Room Number: {params.roomNumber}</div>
                <div className="text-2xl">Patient Name: {bedData?.patientName}</div>
            </div>

            <div className="flex items-start justify-start border border-red">
                <div className="w-48 h-48 p-6 border border-black">
                    <Image 
                        src="/patientPhoto.jpg"
                        alt="Patient Photo"
                        width={16}
                        height={16}
                        layout="responsive" 
                    />
                </div>
            </div>
        </div>
        </>
    );
}