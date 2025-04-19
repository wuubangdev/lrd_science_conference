import React from 'react';
import { Button, Image, message, Popconfirm, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import ModalUpdateFile from './ModalUpdateFile';
import axios from 'axios';
import { ISelect } from './ImageManager';
import { deleteFile } from '../../../../services/apiServices';
const linkS3 = import.meta.env.VITE_S3;
const apiUrl = import.meta.env.VITE_API_URL;


interface IProps {
    fileList: IFile[];
    fetchFileList: () => Promise<void>;
    selects: ISelect[];
}

const FileTable: React.FC<IProps> = (props) => {
    const { fileList, fetchFileList, selects } = props;

    const columns: TableProps<IFile>['columns'] = [
        {
            title: 'Hình ảnh',
            key: 'file',
            dataIndex: 'file',
            render: (fileName) => <>
                {fileName && (
                    <Image
                        width={100}
                        height={'auto'}
                        src={`${linkS3}${fileName}`}
                    />
                )}
            </>
        },
        {
            title: 'Tên ảnh',
            dataIndex: 'title',
            key: 'title',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Thể loại',
            key: 'catalog',
            dataIndex: 'catalog',
            render: (text: string) => <Tag color='#f50'>{text.toLocaleUpperCase()}</Tag>
        },
        {
            title: 'Hành động',
            key: 'id',
            render: (_, record: IFile) => (
                <div className='flex gap-2'>
                    <ModalUpdateFile
                        btnType={{ color: "primary", variant: "outlined" }}
                        fileInfo={record}
                        fetchFileList={fetchFileList}
                        selects={selects}

                    >
                        Cập nhật
                    </ModalUpdateFile>
                    <Popconfirm
                        title="Xoá hình ảnh"
                        description={`Bạn có muốn xoá ảnh: ${record.title}?`}
                        okText="Yes"
                        cancelText="No"
                        onConfirm={() => confirm(record.file, record.id)}
                    >
                        <Button color="danger" variant="outlined">
                            Xoá
                        </Button>
                    </Popconfirm>
                </div>
            ),
        },
    ];
    const handleDeleteFile = async (fileName: string) => {
        const formData = new FormData();
        formData.append('fileName', fileName);
        const headers = {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3dXViYW5nZGV2IiwicGVybWlzc2lvbiI6WyJST0xFX1VTRVJfQ1JFQVRFIiwiUk9MRV9VU0VSX1VQREFURSJdLCJleHAiOjE3NDA1NDczNjEsInVzZXIiOnsiaWQiOjEsInVzZXJOYW1lIjoid3V1YmFuZ2RldiJ9fQ.Wu0j-EA2vnfvbOB0FY8voctAFqjo73oaBCGZfiPD0_M_QOL5lBLdZq47_F2Om2f-AEnbp9d3_UrDbbrD7b47Ag`,
        };
        const res = await axios.request({
            method: 'delete',
            url: `${apiUrl}api/v1/files/delete`,
            data: formData,
            headers: headers,
        })
        const result: ApiResponse<any> = res.data
        if (result) {
            message.success("Tải lên ảnh thành công!");
        } else {
            message.error("Tải lên ảnh thất bại!");
        }

    }
    const confirm = async (fileName: string, id: number) => {
        handleDeleteFile(fileName);
        const response = await deleteFile(id);
        const result: ApiResponse<void> = response.data;
        if (result.statusCode === 200) {
            message.success("Xoá file thành công!");
            fetchFileList();
        } else {
            message.error(result.error);
        }
    };

    return (
        <>
            {fileList &&
                <Table<IFile>
                    columns={columns}
                    dataSource={fileList}
                    rowKey='id'
                    pagination={{ pageSize: 5 }}
                />
            }
        </>
    )
}

export default FileTable;