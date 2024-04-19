'use client';

import { CustomBreadcrumb } from '@/components/custom-breadcrumb';

const breadcrumbItems = {
  fatherLink: '/ivs',
  fatherName: 'Beds',
  childName: 'Active',
};
export default function IvsActive() {
  return (
    <div className='flex p-4 md:p-4'>
      <CustomBreadcrumb items={breadcrumbItems} />
    </div>
  );
}
