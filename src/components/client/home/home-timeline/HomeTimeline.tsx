import { Image, Steps } from 'antd'
import React from 'react'

const timeline: { title: string; description: string }[] = [
    {
        title: "01/01/2025 - 01/02/2025",
        description: "Nộp bài tóm tắt"
    },
    {
        title: "01/02/2025 - 25/03/2025",
        description: "Gửi chấp nhận tóm tắt và nhận bài toàn văn"
    },
    {
        title: "25/03/2025 - 25/04/2025",
        description: "Hoàn chỉnh bài toàn văn theo góp ý phản biện"
    },
    {
        title: "25/04/2024 - 20/6/2025,",
        description: "Đăng ký tham gia hội thảo và in ấn Tạp chí Khoa học Đất"
    },
]

const HomeTimeline: React.FC = () => {
    return (
        <div className='w-full my-container py-20 bg-blue-50'>
            <h1 className='text-4xl font-medium mb-8 text-center'>Các mốc thời gian</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                <div className=''>
                    <div className='w-full aspect-[16/9] rounded-2xl'>
                        <Image src='/timeline.png' alt='tnmt' className='object-cover rounded-lg' />
                    </div>
                </div>
                <Steps
                    direction="vertical"
                    current={2}
                    items={timeline}
                    style={{ fontSize: '1.2rem' }}
                />
            </div>
        </div>
    )
}

export default HomeTimeline;
