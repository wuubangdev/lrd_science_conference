import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className='bg-[#a14d35]/80 font-medium'>
            <div className='w-full my-container flex flex-col gap-1 py-8 border-t-[1px] border-gray-700/35 justify-center items-center  text-white'>
                <div className='mb-2 border-b-[1px] border-gray-700/35 pb-2'>
                    <img src='/logo.png' alt='logo' className='h-12 object-cover hover:scale-105 duration-500 cursor-pointer' />
                </div>
                <div>
                    <a href="">Trường Đại học Cần Thơ. Khoa Môi trường và Tài nguyên Thiên nhiên</a>
                </div>
                <div>
                    Website:
                    <a
                        href="http://www.htqldd2025.ctu.edu.vn"
                        className='text-blue-700 hover:text-blue-900 duration-500'
                        target='_blank'
                    >
                        &nbsp;htqldd2025.ctu.edu.vn</a>
                </div>
                <div>
                    Email:
                    <a
                        href="mailto:lrconference@ctu.edu.vn"
                        className='text-blue-700 hover:text-blue-900 duration-500'
                        target='_blank'
                    >
                        &nbsp;lrconference@ctu.edu.vn</a>
                </div>
                <div className='cursor-default'>
                    © Hội thảo Quản lý đất đai toàn quốc lần 3 (2025)
                </div>
            </div>
        </footer>
    )
}

export default Footer;
