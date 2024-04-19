import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';

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
    <div className='flex min-h-24 flex-col items-center justify-normal gap-4 rounded-2xl bg-white p-4 shadow-md'>
      <div className='font-semibold'>Flow Rate</div>
      <div className='min-w-60'>
        <Slider
          value={value}
          onValueChange={onValueChange}
          min={1}
          max={160}
          step={1}
          className={cn('', className)}
          {...props}
        />
      </div>
      <div className='flex w-full items-center justify-between'>
        <div className='text-xs font-thin'>1</div>
        <div className='text-sm font-medium'>{value} drops/min</div>
        <div className='text-xs font-thin'>160</div>
      </div>
    </div>
  );
}
