'use client';

export default function page({params,}: {params: {roomNumber: string,}}) {
    return (
        <div>
            Room Number {params.roomNumber}
        </div>
    );
}