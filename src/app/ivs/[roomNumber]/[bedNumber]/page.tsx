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
            <div className="flex flex-col items-start justify-start rounded-lg">
                <div className="w-full min-w-full text-md p-4 text-lg border-b">
                    <p>CONTROL PAGE</p>
                </div>

                <div className="flex flex-grow items-center justify-between border-b">
                    <div className="min-w-48 w-48 h-48 p-2">
                    <Image 
                        src="/patientPhoto.jpg"
                        alt="Patient Photo"
                        width={16}
                        height={16}
                        layout="responsive"
                    />
                    </div>
                    <div className="flex-grow flex-shrink p-6">
                    <h2 className="text-md font-bold">About Patient</h2>
                    <p className="text-sm mb-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Nostrum aut reprehenderit minus vitae, laudantium iste nulla 
                        sequi accusantium, sit consectetur velit eaque. 
                        Repudiandae, reprehenderit doloribus. Asperiores debitis ad 
                        odit iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Libero necessitatibus nemo molestiae impedit?
                    </p>
                    <div className="flex space-x-4 justify-between">
                        <div>
                        <h3 className="text-sm font-bold">Patient Name</h3>
                        <p className="text-sm">John Doe</p>
                        </div>
                        <div>
                        <h3 className="text-sm font-bold">Phone Number</h3>
                        <p className="text-sm">+91 234 567 8901</p>
                        </div>
                        <div>
                        <h3 className="text-sm font-bold">Address</h3>
                        <p className="text-sm">123 Main St, Anytown, USA</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}