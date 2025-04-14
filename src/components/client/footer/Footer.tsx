import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className='bg-blue-600/80'>
            <div className='w-full my-container flex flex-col gap-1 py-8 border-t-[1px] border-gray-700/35 justify-center items-center  text-white'>
                <div>
                    Logo
                </div>
                <div>
                    Trường Đại học Cần Thơ. Khoa Môi trường và Tài nguyên Thiên nhiên
                </div>
                <div>
                    Website: http://www.htqldd2025.ctu.edu.vn
                </div>
                <div>
                    Email: lrconference@ctu.edu.vn
                </div>
                <div>
                    © Hội thảo Quản lý đất đai toàn quốc lần 3 (2025)
                </div>
            </div>
        </footer>
    )
}

export default Footer;
