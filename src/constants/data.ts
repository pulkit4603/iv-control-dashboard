export type Bed = {
  bedNumber: number;
  patientId: string;
  patientName: string;
  status: 'Active' | 'Inactive';
  roomNumber: number;
};

export const beds: Bed[] = [
  {
    patientName: 'Pulkit Dwivedi',
    patientId: 'N101',
    roomNumber: 306,
    bedNumber: 1,
    status: 'Inactive'
  },
  {
    patientName: 'Pulkit Gupta',
    roomNumber: 301,
    patientId: 'N117',
    bedNumber: 17,
    status: 'Inactive'
  }
];

// for (let i = 9; i <= 48; i++) {
//   const bed: Bed = {
//     bedNumber: i,
//     patientId: `N10${i}`,
//     patientName: `Patient ${i}`,
//     roomNumber: i % 8 === 0 ? 8 : i % 8,
//     status: i % 2 === 0 ? 'Active' : 'Inactive',
//   };
//   beds.push(bed);
// }

export function getUniqueRoomNumbers(beds: Bed[]): number[] {
  return beds
    .map((bed) => bed.roomNumber)
    .filter((value, index, self) => self.indexOf(value) === index);
}

export const rooms = getUniqueRoomNumbers(beds);

export const pagePaths = {
  homePage: '/dashboard',
  activeIvsPage: '/dashboard/ivs/active',
  logoutPage: '/dashboard/logout',
  profilePage: '/dashboard/profile',
  settingsPage: '/dashboard/settings',
};
