import { Tag } from 'antd';
import React from 'react';

const HomeGuideline: React.FC = () => {
    return (
        <div className='w-full my-container py-20'>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <div className='pr-6 border-r-1 border-r-black/10'>
                    <h1 className='text-3xl font-medium mb-8 text-center uppercase gradient-text'>Hướng dẫn viết bài</h1>
                    <div className='text-lg flex flex-col gap-2 text-justify'>
                        <div>Hình thức viết và cách thức nộp bài tóm tắt tham gia Hội thảo vui lòng xem thông tin hướng dẫn</div>
                        <div>Thông tin chi tiết xin vui lòng liên hệ Ban thư ký Hội thảo: TS. Phan Kiều Diễm, Khoa Môi trường và Tài nguyên Thiên nhiên, Trường Đại học Cần Thơ</div>
                        <div>E-mail: <Tag style={{ fontSize: '1rem', cursor: 'pointer' }} color='#87d068'><a href=''>lrconference@ctu.edu.vn</a></Tag> hoặc <Tag style={{ fontSize: '1rem', cursor: 'pointer' }} color='#f50'><a href=''>pkdiem@ctu.edu.vn</a></Tag></div>
                        <div>Điện thoại: <Tag style={{ fontSize: '1rem', cursor: 'pointer' }} color='#108ee9'> <a href="">+84-983.954.243</a> </Tag></div>
                    </div>
                </div>
                <div className='pl-6'>
                    <h1 className='text-3xl font-medium mb-8 text-center uppercase gradient-text'>Đường link nộp bài</h1>
                    <div className='text-lg'>
                        <div>Đường link nộp bài tóm tắt tại <Tag color='#108ee9' style={{ fontSize: '1rem', cursor: 'pointer' }}>đây</Tag> hoặc quét mã QR để truy cập nộp bài tóm tắt:</div>
                        <div className='w-full flex justify-center'>
                            <div className='w-1/4 h-full aspect-square rounded-lg relative overflow-hidden bg-amber-200'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeGuideline;
