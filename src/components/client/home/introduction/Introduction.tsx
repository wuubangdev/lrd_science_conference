import { Image } from 'antd'
import React from 'react'

const Introduction: React.FC = () => {
    return (
        <div className='w-full my-container py-14 bg-blue-50'>
            <h1 className='text-4xl font-medium mb-10 text-center shadow-text'>Lời mời tham gia</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                <div className=''>
                    <div className='w-full h-full rounded-lg relative overflow-hidden'>
                        <Image src='/ctu.jpg' alt='ctu' className='object-cover rounded-lg' />
                    </div>
                </div>
                <div className='text-justify text-lg text-gray-700 font-medium'>
                    Tiếp nối thành công rực rỡ của Hội thảo Quản lý Đất đai lần thứ hai tại Trường Đại học Nông Lâm, Đại học Huế, chúng tôi hân hạnh thông báo Hội thảo Quản lý Đất đai lần thứ ba với chủ đề "Quản lý đất đai bền vững" (SLM2025) sẽ diễn ra tại Đại học Cần Thơ. Hội thảo được đồng tổ chức bởi Trường Đại học Cần Thơ, Học viện Nông nghiệp Việt Nam và Trường Đại học Nông Lâm - Đại học Huế. Sự kiện này là diễn đàn lý tưởng để các nhà khoa học chia sẽ những kết quả nghiên cứu cơ bản và ứng dụng công nghệ, nhằm phục vụ cho quản lý và phát triển bền vững tài nguyên. Qua đó, hội thảo sẽ tạo cơ hội đề xuất các hướng nghiên cứu, hợp tác và phát triển trong tương lai. Đồng thời, đây cũng là diễn đàn cho học viên, nghiên cứu sinh, nơi các em có thể báo cáo và khám phá những kết quả mới mẻ trong lĩnh vực Quản lý đất đai.
                </div>
            </div>
        </div>
    )
}

export default Introduction;
