import { Bed } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table"
import { ChevronRight } from "lucide-react";
import Link from "next/link";
export const columns: ColumnDef<Bed>[] = [
    {
        accessorKey: "bedNumber",
        header: "Bed Number",
        cell: ({ row }) => (
          <Link href={`/ivs/${row.original.bedNumber}`}>
            {row.original.bedNumber}
          </Link>
        ),
      },
      {
        accessorKey: "patientName",
        header: "Patient Name",
      },
      {
        accessorKey: "roomNumber",
        header: "Room Number",
      },
      {
        accessorKey: "status",
        header: "IV Status",
      },
  ];
  