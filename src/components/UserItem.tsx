'use client';

export default function UserItem() {
    return (
        <div className="flex items-center justify-between gap-2 border rounded-[12px] p-1">
            <div className="avatar rounded-full min-w-12 min-h-12 bg-teal-500 text-white font-[700] flex items-center justify-center">
                <p>PD</p>
            </div>
            <div className="grow">
                <p className="text-[16px] font-bold truncate">Pulkit Dwivedi</p>
                <p className="text-[12px] text-neutral-500 truncate">NR306F3</p>
            </div>
        </div>
    );
}