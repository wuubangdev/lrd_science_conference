import React, { useState } from 'react';
import {
    ContainerOutlined,
    ExceptionOutlined,
    GroupOutlined,
    HomeOutlined,
    InsertRowAboveOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PictureOutlined,
} from '@ant-design/icons';
import { Button, Image, Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router';
import DropDown from './components/admin/dropdown/DropDown';

const { Header, Sider, Content } = Layout;

const AdminLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical p-4 border-b-[1px] border-white/20" >
                    {!collapsed &&
                        <div className='relative'>
                            <Image src='/logo.png' alt='logo' className='object-cover h-12' />
                        </div>
                    }
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    style={{ fontSize: '1rem' }}
                    items={[
                        {
                            key: '1',
                            icon: <HomeOutlined />,
                            label: 'Trang chủ',
                        },
                        {
                            key: '2',
                            icon: <GroupOutlined />,
                            label: 'Trang tổ chức',
                        },
                        {
                            key: '3',
                            icon: <ContainerOutlined />,
                            label: 'Trang bài viết',
                            children: [
                                {
                                    key: '3-1',
                                    icon: <ExceptionOutlined />,
                                    label: 'Guiline'
                                },
                                {
                                    key: '3-2',
                                    icon: <InsertRowAboveOutlined />,
                                    label: 'List Abstract'
                                },
                                {
                                    key: '3-3',
                                    icon: <InsertRowAboveOutlined />,
                                    label: 'List Fulltext'
                                },
                            ]
                        },
                        {
                            key: '3',
                            icon: <PictureOutlined />,
                            label: 'Trang du lịch',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{ background: colorBgContainer, paddingRight: 24, paddingLeft: 0 }}
                    className='flex items-center justify-between'
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <DropDown />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;