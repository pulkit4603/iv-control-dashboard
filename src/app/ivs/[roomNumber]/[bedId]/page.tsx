'use client';

export default function page({params,} : {params: {bedId: string, roomNumber: string,},}) {
    return (
        <div>
            Bed Number {params.bedId} in Room Number {params.roomNumber} 
        </div>
    );
}