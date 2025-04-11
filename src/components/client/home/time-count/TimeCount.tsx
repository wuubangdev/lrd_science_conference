import React from 'react'

const TimeElement: React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            <div className='rounded-2xl bg-blue-500 text-5xl text-center p-8 text-white'>
                90
            </div>
            <div className='text-xl'>
                Days
            </div>
        </div>
    )
}

const TimeCount: React.FC = () => {
    return (
        <div className='w-full flex items-start text-4xl my-container px-8 py-11 gap-4 justify-between'>
            <div className='font-medium leading-none'>Thời gian đếm ngược:</div>
            <div className='flex items-center gap-2 leading-none'>
                <TimeElement />
                <TimeElement />
                <TimeElement />
                <TimeElement />
            </div>
        </div>
    )
}

export default TimeCount;
