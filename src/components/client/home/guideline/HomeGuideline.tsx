import React from 'react';

const guideline: string[] = [
    "Hình thức viết và cách thức nộp bài tóm tắt tham gia Hội thảo vui lòng xem thông tin hướng dẫn",
    "Thông tin chi tiết xin vui lòng liên hệ Ban thư ký Hội thảo: TS. Phan Kiều Diễm, Khoa Môi trường và Tài nguyên Thiên nhiên, Trường Đại học Cần Thơ",
    "E-mail: lrconference@ctu.edu.vn, hoặc pkdiem@ctu.edu.vn",
    "Điện thoại: +84-983.954.243"
]

const HomeGuideline: React.FC = () => {
    return (
        <div className='w-full my-container py-20'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                <div>
                    <h1 className='text-4xl font-medium mb-8'>Hướng dẫn viết bài</h1>
                    <ul>
                        {guideline && guideline.map((item, i) => {
                            return (
                                <li key={i}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className=''>
                    <h1 className='text-4xl font-medium mb-8'>Đường link nộp bài</h1>
                </div>
            </div>
        </div>
    )
}

export default HomeGuideline;
