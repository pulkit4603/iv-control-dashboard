'use client';
import Image from 'next/image';

export default function AboutPatientTile() {
  return (
    <>
      <div className='h-48 w-48 min-w-48 p-2'>
        <Image
          src='/patientPhoto.jpg'
          /* MAKE RESPONSIVE */
          alt='Patient Photo'
          width={16}
          height={16}
          layout='responsive'
          className='rounded-full'
        />
      </div>

      <div className='flex-shrink gap-2 p-6'>
        <div className='flex flex-col gap-1'>
          <div className='rounded-3xl p-2'>
            <h2 className='text-md font-bold'>About Patient</h2>
            <p className='mb-4 text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae suscipit atque hic, perferendis aut vel, reprehenderit, pariatur distinctio quaerat sapiente veritatis quasi repellendus consequatur modi! Quam corporis similique tempora.
              {/* MAKE RESPONSIVE */}
            </p>
          </div>
          <div className='flex justify-between space-x-4 rounded-3xl p-2'>
            <div>
              <h3 className='text-sm font-bold'>Patient Name</h3>
              <p className='text-sm'>
                Pulkit Gupta
                {/* MAKE RESPONSIVE */}
              </p>
            </div>

            <div>
              <h3 className='text-sm font-bold'>Phone Number</h3>
              <p className='text-sm'>
                +91 8879999999
                {/* MAKE RESPONSIVE */}
              </p>
            </div>

            <div>
              <h3 className='text-sm font-bold'>Address</h3>
              <p className='text-sm'>
                703, Antilia, Billionaires Row, Mumbai
                {/* MAKE RESPONSIVE */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
