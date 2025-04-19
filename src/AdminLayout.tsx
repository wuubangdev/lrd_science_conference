import React, { useState } from 'react';
import {
    ContainerOutlined,
    CreditCardOutlined,
    ExceptionOutlined,
    ExclamationCircleOutlined,
    FolderOpenOutlined,
    GroupOutlined,
    HomeOutlined,
    InsertRowAboveOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PictureOutlined,
} from '@ant-design/icons';
import { Button, Image, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router';
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
                            children: [
                                {
                                    key: '1-1',
                                    icon: <CreditCardOutlined />,
                                    label: <Link to={'/admin/banner'}>Banner</Link>,

                                },
                                {
                                    key: '1-2',
                                    icon: <ExclamationCircleOutlined />,
                                    label: <Link to={'/admin/information'}>Thông tin</Link>,

                                },
                            ]
                        },
                        {
                            key: '2',
                            icon: <GroupOutlined />,
                            label: <Link to={'/admin/organization'}>Tổ chức</Link>,

                        },
                        {
                            key: '3',
                            icon: <ContainerOutlined />,
                            label: 'Trang bài viết',
                            children: [
                                {
                                    key: '3-1',
                                    icon: <ExceptionOutlined />,
                                    label: <Link to={'/admin/guidline'}>Bài hướng dẫn</Link>,

                                },
                                {
                                    key: '3-2',
                                    icon: <InsertRowAboveOutlined />,
                                    label: <Link to={'/admin/abstract'}>Bài tóm tắt</Link>,

                                },
                                {
                                    key: '3-3',
                                    icon: <InsertRowAboveOutlined />,
                                    label: <Link to={'/admin/fulltext'}>Bài toàn văn</Link>,

                                },
                            ]
                        },
                        {
                            key: '3',
                            icon: <PictureOutlined />,
                            label: <Link to={'/admin/travel'}>Thông tin du lịch</Link>,
                        },
                        {
                            key: '4',
                            icon: <FolderOpenOutlined />,
                            label: <Link to={'/admin/files'}>Quản lý hình ảnh</Link>,
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