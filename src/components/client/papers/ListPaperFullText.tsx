import React from 'react';
import { Table, Tag } from 'antd';
import type { TableProps } from 'antd';
interface DataType {
    code: string;
    title: string;
    mainAuth: string;
    subAuth: string;
    tag: string;
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'STT',
        key: 'index',
        render: (_text, _record, index) => index + 1,
    },
    {
        title: 'Mã bài viết',
        dataIndex: 'code',
        key: 'code',
    },
    {
        title: 'Tựa bài viết',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Tác giả chính',
        dataIndex: 'mainAuth',
        key: 'mainAuth',
    }, {
        title: 'Tác giả phụ',
        dataIndex: 'subAuth',
        key: 'subAuth',
    },
    {
        title: 'Tag',
        key: 'tag',
        dataIndex: 'tag',
        render: (_, { tag }) => <Tag color='#f50' key={tag}>{tag}</Tag>,
    },
    // {
    //     title: 'Action',
    //     key: 'action',
    //     render: (_, record) => (
    //         <Space size="mcodedle">
    //             <a>Delete</a>
    //         </Space>
    //     ),
    // },
];

const data: DataType[] = [
    {
        code: '1',
        mainAuth: 'John Brown',
        subAuth: '',
        title: 'New York No. 1 Lake Park',
        tag: 'pendding',
    },
    {
        code: '2',
        mainAuth: 'John Brown',
        subAuth: 'Jim Green',
        title: 'London No. 1 Lake Park',
        tag: 'pendding',
    },
    {
        code: '3',
        mainAuth: 'John Brown',
        subAuth: 'Joe Black',
        title: 'Sydney No. 1 Lake Park',
        tag: 'pendding',
    },
];

const ListPaperFullText: React.FC = () => {
    return (
        <div className='min-h-screen'>
            <Table<DataType> columns={columns} dataSource={data} />
        </div>
    )
}

export default ListPaperFullText;
