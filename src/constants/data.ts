export type Bed = {
    bedNumber: number;
    patientName: string;
    roomNumber: number;
    status: "Active" | "Inactive";
  };  

export const beds: Bed[] = [
    {
      bedNumber: 1,
      patientName: "Candice Schiner",
      roomNumber: 304,
      status: "Active",
    },
    {
      bedNumber: 2,
      patientName: "John Doe",
      roomNumber: 303,
      status: "Active",
    },
    {
      bedNumber: 3,
      patientName: "Alice Johnson",
      roomNumber: 305,
      status: "Active",
    },
    {
      bedNumber: 4,
      patientName: "David Smith",
      roomNumber: 305,
      status: "Inactive",
    },
    {
      bedNumber: 5,
      patientName: "Emma Wilson",
      roomNumber: 303,
      status: "Active",
    },
    {
      bedNumber: 6,
      patientName: "James Brown",
      roomNumber: 304,
      status: "Active",
    },
    {
      bedNumber: 7,
      patientName: "Laura White",
      roomNumber: 305,
      status: "Active",
    },
    {
      bedNumber: 8,
      patientName: "Michael Lee",
      roomNumber: 304,
      status: "Active",
    },
  ];

export const pagePaths = {
  homePage: '/',
  activeIvsPage: '/ivs/active',
  logoutPage: '/logout',
  profilePage: '/profile',
  settingsPage: '/settings',
};