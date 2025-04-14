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
        <div className='my-container' style={{ paddingLeft: '0px', paddingRight: '0px' }}>
            <div className='w-full flex items-center text-4xl py-11 gap-8 justify-between'>
                <h1 className='text-5xl font-medium text-center'>Hội thảo khoa học quản lý đất đai năm 2025</h1>
                <div className='flex flex-col gap-4 items-center'>
                    <h1 className='text-2xl font-medium'>Thời gian còn lại</h1>
                    <div className='flex items-center gap-2 leading-none'>
                        <TimeElement />
                        <TimeElement />
                        <TimeElement />
                        <TimeElement />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeCount;
