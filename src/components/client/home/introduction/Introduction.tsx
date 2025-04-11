import React from 'react'

const Introduction: React.FC = () => {
    return (
        <div className='w-full my-container py-20 bg-blue-50'>
            <h1 className='text-4xl font-medium mb-8'>Giới thiệu</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                <div className=''>
                    <div className='w-full aspect-[16/9] bg-amber-300 rounded-2xl'></div>
                </div>
            </div>
        </div>
    )
}

export default Introduction
