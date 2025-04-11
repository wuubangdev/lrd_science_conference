import React from 'react'

const timeline: string[] = [
    "01/01/2025 - 01/02/2025: Nộp bài tóm tắt",
    "01/02/2025 - 25/03/2025: Gửi chấp nhận tóm tắt và nhận bài toàn văn",
    "25/03/2025 - 25/04/2025: Hoàn chỉnh bài toàn văn theo góp ý phản biện",
    "25/04/2024 - 20/6/2025: Đăng ký tham gia hội thảo và in ấn Tạp chí Khoa học Đất",
]

const HomeTimeline: React.FC = () => {
    return (
        <div className='w-full my-container py-20 bg-blue-50'>
            <h1 className='text-4xl font-medium mb-8'>Các mốc thời gian</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                <div className=''>
                    <div className='w-full aspect-[16/9] bg-amber-300 rounded-2xl'></div>
                </div>
                <div>
                    <ul>
                        {timeline && timeline.map((item, i) => {
                            return (
                                <li key={i}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomeTimeline;
