import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload, Image } from 'antd';
const linkS3 = import.meta.env.VITE_S3;

const { Dragger } = Upload;

interface IStepOne {
    fileList: any[];
    setFileList: React.Dispatch<React.SetStateAction<any[]>>;
    fileS3?: string;
}

const StepUpdateOne: React.FC<IStepOne> = ({ fileList, fileS3, setFileList }) => {

    const props: UploadProps = {
        name: 'file',
        multiple: false,
        onChange(info) {
            const { file, fileList } = info;
            if (file.status === 'done') {
                message.success(`${file.name} tải lên thành công.`);
            } else if (file.status === 'error') {
                message.error(`${file.name} tải lên thất bại.`);
            }
            setFileList(fileList);
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
        beforeUpload(file) {
            const isImage = file.type.startsWith('image/');
            if (!isImage) {
                message.error('Bạn chỉ có thể tải lên ảnh!');
            }
            return isImage;
        },
        fileList,
    };

    return (
        <div className='px-6 mt-3 mb-6 flex-1 flex flex-col justify-center items-center'>
            {fileList.length > 0 ?
                (
                    <div className='w-full flex justify-center items-center'>
                        <Image
                            src={URL.createObjectURL(fileList[0].originFileObj)}
                            alt="Preview"
                            width={'100%'}
                            height='auto'
                            style={{ marginBottom: 16 }}
                        />
                    </div>
                )
                :
                fileS3 !== '' ?
                    (
                        <div className='w-full flex justify-center items-center'>
                            <Image
                                src={`${linkS3}${fileS3}`}
                                alt="Preview"
                                width={'100%'}
                                height='auto'
                                style={{ marginBottom: 16 }}
                            />
                        </div>
                    )
                    :
                    (
                        <div>
                            <Dragger {...props} accept=".jpg,.webp,.png,.svg">
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click vào hoặc thả file vào đây để tải file lên bộ nhớ</p>
                                <p className="ant-upload-hint">
                                    Hỗ trợ tải lên 1 ảnh với các định dạng (image file: jpg, webp, png, svg)
                                </p>
                            </Dragger>
                        </div>
                    )}
        </div>
    );
};

export default StepUpdateOne;
