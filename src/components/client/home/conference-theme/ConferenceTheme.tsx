import { Image } from 'antd'
import React from 'react'

const listTheme: string[] = [
    "Quản lý bền vững tài nguyên đất đai",
    "Quản lý hồ sơ địa chính",
    "Phát triển quỹ đất và đô thị hóa",
    "Khai thác nguồn lực tài chính từ đất đai",
    "Quy hoạch sử dụng đất",
    "Sử dụng đất và Biến đổi khí hậu",
    "Công nghệ trong khai thác, sử dụng và quản lý tài nguyên đất đai",
    "Ô nhiễm và giải pháp xử lý môi trường đất",
    "Thị trường bất động sản điều kiện Luật đất đai có hiệu lực",
    "Bất cập trong quản lý đất đai ở địa phương",
]

const ConferenceTheme: React.FC = () => {
    return (
        <div className='w-full my-container flex flex-col items-center py-20 gap-4'>
            <div className='text-4xl font-medium mb-8 gradient-text'>Chủ đề hội thảo</div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6 w-full'>
                <div>
                    <ul>
                        {listTheme && listTheme.map((item, i) => {
                            return (
                                <li key={i} className='flex gap-2 py-1 text-lg cursor-pointer hover:text-black/70 hover:bg-blue-300 px-2 rounded-lg hover:translate-x-1 transition-all duration-200 ease-in-out'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
                                    </svg>


                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className=''>
                    <div className='w-full h-full rounded-lg relative overflow-hidden'>
                        <Image src='/tnmt.jpg' alt='tnmt' className='object-cover rounded-lg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConferenceTheme;
