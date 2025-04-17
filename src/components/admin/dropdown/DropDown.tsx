import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
    {
        label: (
            <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
                Thông tin
            </a>
        ),
        key: '0',
    },
    {
        label: (
            <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
                Cập nhật thông tin
            </a>
        ),
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: 'Đăng xuất',
        key: '3',
    },
];

const DropDown: React.FC = () => (
    <Dropdown menu={{ items }} trigger={['click']}>
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                {/* <DownOutlined /> */}
            </Space>
        </a>
    </Dropdown>
);

export default DropDown;