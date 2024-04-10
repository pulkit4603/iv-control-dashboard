export type Bed = {
    bedNumber: number;
    patientId: string;
    patientName: string;
    status: "Active" | "Inactive";
    roomNumber: number;
  };  

export const beds: Bed[] = [
  {
    bedNumber: 1,
    patientId: "N101",
    patientName: "Candice Schiner",
    roomNumber: 304,
    status: "Active",
  },
  {
    bedNumber: 2,
    patientId: "N102",
    patientName: "John Doe",
    roomNumber: 303,
    status: "Active",
  },
  {
    bedNumber: 3,
    patientId: "N103",
    patientName: "Alice Johnson",
    roomNumber: 305,
    status: "Active",
  },
  {
    bedNumber: 4,
    patientId: "N104",
    patientName: "David Smith",
    roomNumber: 305,
    status: "Inactive",
  },
  {
    bedNumber: 5,
    patientId: "N105",
    patientName: "Emma Wilson",
    roomNumber: 303,
    status: "Active",
  },
  {
    bedNumber: 6,
    patientId: "N106",
    patientName: "James Brown",
    roomNumber: 304,
    status: "Active",
  },
  {
    bedNumber: 7,
    patientId: "N107",
    patientName: "Laura White",
    roomNumber: 305,
    status: "Active",
  },
  {
    bedNumber: 8,
    patientId: "N108",
    patientName: "Michael Lee",
    roomNumber: 304,
    status: "Active",
  },
];
for (let i = 9; i <= 48; i++) {
  const bed: Bed = {
    bedNumber: i,
    patientId: `N10${i}`,
    patientName: `Patient ${i}`,
    roomNumber: i % 8 === 0 ? 8 : i % 8,
    status: i%2 === 0 ? "Active" : "Inactive",
  };
  beds.push(bed);
}

export function getUniqueRoomNumbers(beds: Bed[]): number[] {
  return beds
    .map(bed => bed.roomNumber)
    .filter((value, index, self) => self.indexOf(value) === index);
  };

export const rooms = getUniqueRoomNumbers(beds);

export const pagePaths = {
  homePage: '/',
  activeIvsPage: '/ivs/active',
  logoutPage: '/logout',
  profilePage: '/profile',
  settingsPage: '/settings',
};