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
        <div className='w-full my-container py-20'>
            <h1 className='text-4xl font-medium mb-8'>Chủ đề hội thảo</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                <div>
                    <ul>
                        {listTheme && listTheme.map((item, i) => {
                            return (
                                <li key={i}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className=''>
                    <div className='w-full aspect-[16/9] bg-amber-300 rounded-2xl'></div>
                </div>
            </div>
        </div>
    )
}

export default ConferenceTheme;
