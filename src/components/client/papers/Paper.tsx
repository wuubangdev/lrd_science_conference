import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import ListPaperAbstract from './ListPaperAbstract';
import ListPaperFullText from './ListPaperFullText';
import Guideline from './Guideline';

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Thể lệ bài viết',
        children: <Guideline />,
    },
    {
        key: '2',
        label: 'Bài tóm tắt',
        children: <ListPaperAbstract />,
    },
    {
        key: '3',
        label: 'Bài toàn văn',
        children: <ListPaperFullText />,
    },
];

const Paper: React.FC = () => {
    return (
        <div className='w-full my-container py-10'>
            {/* <h1 className='text-4xl font-medium mb-8 text-center'>Hướng dẫn viết bài</h1> */}
            <Tabs size='large' defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    );
};

export default Paper;