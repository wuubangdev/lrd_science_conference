import React from 'react';

const HomeGuideline: React.FC = () => {
    return (
        <div className='w-full my-container py-20'>
            <h1 className='text-4xl font-medium mb-8'>Hướng dẫn viết bài</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                <div></div>
                <div className=''>
                    <div className='w-full aspect-[16/9] bg-amber-300 rounded-2xl'></div>
                </div>
            </div>
        </div>
    )
}

export default HomeGuideline;
