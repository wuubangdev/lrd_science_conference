import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Tab 1',
        children: <div className='w-full h-screen'>123213</div>,
    },
    {
        key: '2',
        label: 'Tab 2',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'Tab 3',
        children: 'Content of Tab Pane 3',
    },
];

const Paper: React.FC = () => {
    return (
        <div className='w-full my-container py-20'>
            <h1 className='text-4xl font-medium mb-8 text-center'>Hướng dẫn viết bài</h1>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    );
};

export default Paper;