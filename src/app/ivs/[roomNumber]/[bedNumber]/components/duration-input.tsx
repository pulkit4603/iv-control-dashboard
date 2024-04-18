"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function DurationInput({
  duration,
  setDuration,
}: {
  duration: any;
  setDuration: any;
}) {
  return (
    <div className="flex flex-col min-h-24 p-4 items-center justify-normal gap-4 rounded-2xl bg-white shadow-md">
      <div>
        <form
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   setDuration((e.target as HTMLInputElement).value);
          // }}
          className="flex items-center justify-normal p-2 md:p-2 text-[1rem] text-gray-600 backdrop-brightness-110 rounded-md"
        >
          <Label className="p-2">Duration (minutes)</Label>
          <Input
            id="stock-1"
            className="w-24 h-8 p-4"
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          {/* <Button
            variant="ghost"
            size="icon"
            type="submit"
            className="w-8 h-8 p-2"
          >
            <Check size={16} />
          </Button> */}
        </form>
      </div>
    </div>
  );
}
