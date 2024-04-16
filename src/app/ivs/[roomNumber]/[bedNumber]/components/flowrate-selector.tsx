import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>;

export default function FlowrateSelector({
  className,
  value,
  onValueChange,
  ...props
}: SliderProps & {
  value: number[];
  onValueChange: (value: number[]) => void;
}) {
  return (
    <div className="flex flex-col min-h-24 p-4 items-center justify-normal gap-4 rounded-2xl bg-white shadow-md">
      <div className="font-semibold">Flow Rate</div>
      <div className="min-w-60">
        <Slider
          value={value}
          onValueChange={onValueChange}
          min={0.1}
          max={20}
          step={0.1}
          className={cn("", className)}
          {...props}
        />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="text-xs font-thin">0.1</div>
        <div className="text-sm font-medium">{value} ml/hr</div>
        <div className="text-xs font-thin">20</div>
      </div>
    </div>
  );
}
