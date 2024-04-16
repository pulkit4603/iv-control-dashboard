"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MedicineSelectionTable({
  setMedicineFormData,
}: {
  setMedicineFormData: any;
}) {
  const form = useForm();

  return (
    <Form {...form}>
      <form className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="medicine"
          render={({ field }: { field: any }) => (
            <FormItem className="min-w-44 min-h-28 p-4 rounded-2xl bg-white shadow-md">
              <FormLabel className="font-semibold">Select Medicine</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  setMedicineFormData({ medicine: value });
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="min-w-fit shadow-sm">
                    <SelectValue placeholder="Select medicine to be administered" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="glucose">glucose</SelectItem>
                  <SelectItem value="gentamicin">gentamicin</SelectItem>
                  <SelectItem value="micafungin">micafungin</SelectItem>
                  <SelectItem value="amphotericin">amphotericin</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
