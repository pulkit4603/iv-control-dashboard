'use client';
import { beds, Bed } from '@/constants/data';
import {
  CustomBreadcrumb,
  CustomBreadcrumbItems,
} from '@/components/custom-breadcrumb';
import AboutPatientTile from './components/about-patient-tile';
import MedicineSelectionTable from './components/medicine-selection-table';
import FlowrateSelector from './components/flowrate-selector';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import DurationInput from './components/duration-input';
import { useToast } from '@/components/ui/use-toast';
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
  const { toast } = useToast();
  const [medicineFormData, setMedicineFormData] =
    useState<MedicineFormData | null>(null);

  const [flowrateFormData, setFlowrateFormData] = useState([0.5]);

  const [submittedDuration, setSubmittedDuration] = useState<number | null>(1);

  const handleDurationSubmit = (newDuration: any) => {
    setSubmittedDuration(newDuration);
    // Now you can use the submitted duration here in the parent component.
  };

  const bedData = getBedByNumberAndRoom(
    beds,
    parseInt(params.bedNumber),
    parseInt(params.roomNumber)
  );

  const breadcrumbItems: CustomBreadcrumbItems['items'] = {
    fatherLink: `/dashboard/ivs/${params.roomNumber}`,
    fatherName: `Room ${params.roomNumber}`,
    childName: `Bed ${params.bedNumber}`,
  };

  //API communication
  async function postPwm(
    option: string,
    roomNumber: string,
    slider: number,
    time: number
  ) {
    try {
      console.log('Posting data...');
      const response = await fetch(
        // 'https://g374xrbf-5519.inc1.devtunnels.ms/motor',
        // 'https://9rfjq5dz-5519.inc1.devtunnels.ms/motor',
        'https://4j4xjw7m-5519.inc1.devtunnels.ms/motor',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            option: option,
            room: roomNumber,
            slider: slider,
            time: time,
          }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Failed to post data: ', error);
    }
  }

  async function postStop() {
    try {
      console.log('Posting data...');
      const response = await fetch(
        // 'https://g374xrbf-5519.inc1.devtunnels.ms/motor/stop',
        'https://4j4xjw7m-5519.inc1.devtunnels.ms//motor/stop',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            room: params.roomNumber,
          }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Failed to post data: ', error);
    }
  }
  const [isIVActive, setIsIVActive] = useState(false);
  return (
    <>
      <div className='flex flex-col items-start justify-between p-4 md:p-4'>
        <CustomBreadcrumb items={breadcrumbItems} />
      </div>
      <div className='flex flex-col items-start justify-start gap-4 rounded-lg p-4'>
        <div className='flex min-w-full flex-grow items-center justify-between rounded-3xl p-2 backdrop-brightness-110'>
          <AboutPatientTile />
        </div>
        <div className='flex min-w-full flex-grow items-center justify-start gap-4 rounded-3xl p-2 backdrop-brightness-110'>
          <div className='p-4'>
            <MedicineSelectionTable setMedicineFormData={setMedicineFormData} />
          </div>
          <div className='p-4'>
            <FlowrateSelector
              value={flowrateFormData}
              onValueChange={setFlowrateFormData}
            />
          </div>
          <div className='p-4'>
            <DurationInput
              duration={submittedDuration}
              setDuration={handleDurationSubmit}
            />
          </div>
          <div className='flex min-h-24 items-center justify-end gap-4 rounded-2xl bg-white p-4 shadow-md'>
            {/* {medicineFormData && (
              <div className="p-4">
                <p className="font-bold pb-2">Medicine:</p>{" "}
                {medicineFormData?.medicine}
              </div>
            )}
            {flowrateFormData && (
              <div className="p-4">
                <p className="font-bold pb-2">Flow Rate:</p>
                {flowrateFormData[0]} drops/min
              </div>
            )}
            {submittedDuration && (
              <div className="p-4">
                <p className="font-bold pb-2">Duration:</p>
                {submittedDuration} minutes
              </div>
            )} */}
            <div className='p-4'>
              <div className='p-2'>
                <Button
                  onClick={() => {
                    console.log(
                      `isactiveiv: ${isIVActive}, setdur: ${submittedDuration}`
                    );
                    if (!isIVActive) {
                      setIsIVActive(true);
                      console.log(`in if block: isiv: ${isIVActive}`);
                      postPwm(
                        'forward',
                        params.roomNumber,
                        54000 + (11535 / 160) * flowrateFormData[0],
                        Number(submittedDuration) * 60000
                      );
                      toast({
                        title: 'IV Administration Started',
                        description: `For ${Number(submittedDuration) * 60} seconds`,
                      });
                      setTimeout(() => {
                        setIsIVActive(false);
                        console.log('TIMEOUT OVER');
                      }, submittedDuration! * 60000);

                      console.log('IV Active: ', isIVActive);
                    } else {
                      console.log('Here in else');
                      toast({
                        title: 'IV Administration Failed',
                        description: `IV is currently active`,
                      });
                    }
                  }}
                >
                  START
                </Button>
              </div>
              <div className='p-2'>
                <Button
                  onClick={() => {
                    if (isIVActive) {
                      postStop();
                      setIsIVActive(false);
                      toast({
                        title: 'IV Administration Stopped',
                        description: `IV has been stopped`,
                      });
                    } else {
                      toast({
                        title: 'Cannot Stop Administering IV',
                        description: `IV is currently inactive`,
                      });
                    }
                  }}
                >
                  STOP
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
