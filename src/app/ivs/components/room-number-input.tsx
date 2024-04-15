'use client';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { rooms } from "@/constants/data";

export default function RoomNumberInput() {
    const router = useRouter();
    const [roomNumber, setRoomNumber] = useState(Math.min(...rooms));

    const handleSubmit = (event: any) => {
        event.preventDefault();
        router.push(`/ivs/${roomNumber}`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex items-center justify-normal p-2 md:p-2 text-[1rem] text-gray-600 backdrop-brightness-110 rounded-md">
            <Label className='p-2' htmlFor="email">Room Number</Label>
            <Input
              id="stock-1"
              className='w-24 h-8 p-4'
              type="number"
              value={roomNumber}
              onChange={(e) => setRoomNumber(Number(e.target.value))}
            />
            {/* <Button variant="ghost" size="icon" type="submit"  className='w-6 h-6'><Check size={16}/></Button> */}
          </form>
        </div>
    );
}