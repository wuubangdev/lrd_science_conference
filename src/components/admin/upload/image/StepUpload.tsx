import React from 'react';
import { Button, Divider, Form, message, Progress, Tooltip } from 'antd';
import axios from 'axios';
import StepUploadTwo from './StepUploadTwo';
import StepUploadOne from './StepUploadOne';
import { ISelect } from '../../files/image/ImageManager';
import { postCreateNewFile } from '../../../../services/apiServices';
const apiUrl = import.meta.env.VITE_API_URL;

interface IStep {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    current: number;
    setCurrent: React.Dispatch<React.SetStateAction<number>>;
    fileList: any[]
    setFileList: React.Dispatch<React.SetStateAction<any[]>>;
    uploadProgress: number;
    setUploadProgress: React.Dispatch<React.SetStateAction<number>>;
    fileS3: string;
    setFileS3: React.Dispatch<React.SetStateAction<string>>;
    selects: ISelect[];
    fetchFileList: () => Promise<void>;
}

const StepUpload: React.FC<IStep> = ({
    setIsModalOpen,
    setCurrent,
    fileList,
    setFileList,
    uploadProgress,
    setUploadProgress,
    fileS3,
    setFileS3,
    selects,
    fetchFileList,
}) => {
    const [form] = Form.useForm();

    const handleUploadFile = async () => {
        const formData = new FormData();
        formData.append('file', fileList[0].originFileObj);

        const headers = {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsInBlcm1pc3Npb24iOlsiUk9MRV9VU0VSX0NSRUFURSIsIlJPTEVfVVNFUl9VUERBVEUiXSwiZXhwIjoxNzQ0Nzc4NTEyLCJ1c2VyIjp7ImlkIjoyLCJ1c2VyTmFtZSI6ImFkbWluIn19.JoXo9GkMRKgdaVlpZ-U-0Ytdv743cThbR1z3F-Vm1EHKyVmSsufe7PCDY8ZkIXR0lFqb8uBNuhphdpSxSgVxpg`,
        };

        const res = await axios.post(`${apiUrl}api/v1/files/upload`,
            formData,
            {
                headers,
                onUploadProgress: (progressEvent) => {
                    if (progressEvent.total) {
                        const percentCompleted = Math.round(
                            (progressEvent.loaded * 100) / progressEvent.total
                        );
                        setUploadProgress(percentCompleted);
                    }
                },
            });
        if (res.data) {
            message.success("Upload success!");
            setFileS3(res.data);
        } else {
            message.error("Upload failed!");
        }
    }

    const onFinish = async (values: IFile) => {
        const response = await postCreateNewFile({
            title: values.title,
            catalog: values.catalog,
            file: fileS3
        });
        const result: ApiResponse<IFile> = response.data;
        if (result.statusCode === 201) {
            message.success("Create file success!");
            clearData();
            setIsModalOpen(false);
            fetchFileList();
        } else {
            message.error(result.error)
        }
    };

    const handleDeleteFile = async () => {
        const formData = new FormData();
        formData.append('fileName', fileS3);
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
            message.success("Delete file success!");
        } else {
            message.error("Upload failed!");
        }

    }

    const clearData = () => {
        setFileList([]);
        setUploadProgress(0);
        setCurrent(0);
        setFileS3('');
        form.resetFields();
    }

    return (
        <>
            <Divider />
            <div className='grid grid-cols-2'>
                <div className='flex flex-col gap-3 items-center px-3 border-r-[1px] border-black/65'>
                    <span className='font-semibold text-lg'>Bước 1: Tải ảnh lên bộ nhớ</span>
                    <StepUploadOne fileList={fileList} setFileList={setFileList} fileS3={fileS3} />
                    {(fileList.length > 0 || fileS3 !== "") &&
                        <div className='flex gap-3'>
                            {fileS3 === "" &&
                                <Button
                                    color='primary'
                                    variant='outlined'
                                    onClick={() => {
                                        handleUploadFile();
                                    }}
                                >
                                    Tải ảnh lên bộ nhớ
                                </Button>
                            }
                            {fileS3 !== "" && <Button
                                danger
                                onClick={() => {
                                    setFileList([]);
                                    handleDeleteFile();
                                    setFileS3("");
                                }}
                            >Xoá ảnh khỏi bộ nhớ</Button>}
                            {fileS3 === "" && <Button
                                danger
                                onClick={() => {
                                    setFileList([]);
                                }}
                            >Xoá ảnh đã chọn</Button>}
                        </div>
                    }
                    {uploadProgress > 0 &&
                        <Progress percent={uploadProgress} />
                    }
                </div>
                <div
                    style={{
                        opacity: fileS3 === "" ? 0.5 : 1,
                        cursor: fileS3 === "" ? "wait" : "default",
                    }}
                >
                    <Tooltip
                        title={fileS3 === "" ? "Vui lòng tải ảnh lên bộ nhớ (bước 1)" : ""}
                        color='#f50'
                        className='flex flex-col gap-3 items-center'
                    >
                        <span className='font-semibold text-lg'>Bước 2: Tạo thông tin ảnh</span>
                        <StepUploadTwo fileS3={fileS3} selects={selects} form={form} onFinish={onFinish} />
                    </Tooltip>
                </div>
            </div>
        </>
    );
};

export default StepUpload;