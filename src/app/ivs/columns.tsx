import { Bed } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const columns: ColumnDef<Bed>[] = [
    {
        accessorKey: "bedNumber",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Bed No.
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
      },
      {
        accessorKey: "patientName",
        header: "Patient Name",
      },
      {
        accessorKey: "patientId",
        header: "Patient ID",
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
  