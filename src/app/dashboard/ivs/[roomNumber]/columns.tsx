import { Bed } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CellProps {
  row: { original: Bed };
}

interface RoomCellProps {
  cell: any;
  getValue: any;
}

export const columns: ColumnDef<Bed>[] = [
  {
    accessorKey: 'bedNumber',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Bed No.
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }: CellProps) => {
      const bedNumber = row.original.bedNumber;
      const roomNumber = row.original.roomNumber;
      return (
        <Link href={`/dashboard/ivs/${roomNumber}/${bedNumber}`}>
          {bedNumber}
        </Link>
      );
    },
  },
  {
    accessorKey: 'patientName',
    header: 'Patient Name',
  },
  {
    accessorKey: 'patientId',
    header: 'Patient ID',
  },
  {
    accessorKey: 'roomNumber',
    header: 'Room Number',
    cell: ({ cell, getValue }: RoomCellProps) => {
      const value = getValue();
      return <Link href={`/dashboard/ivs/${value}`}>{value}</Link>;
    },
  },
  {
    accessorKey: 'status',
    header: 'IV Status',
  },
];
