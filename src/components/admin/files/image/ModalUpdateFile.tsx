import { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { BaseButtonProps } from 'antd/es/button/button';
import { ISelect } from './ImageManager';
import StepUpdate from '../../upload/image/StepUpdate';

export interface IModalButton {
    selects: ISelect[];
    fetchFileList: () => Promise<void>;
    btnType: BaseButtonProps;
    children: React.ReactNode;
    fileInfo: IFile;
}

const ModalUpdateFile = (props: IModalButton) => {
    const { btnType, children, fileInfo, selects, fetchFileList } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [current, setCurrent] = useState(0);
    const [fileList, setFileList] = useState<any[]>([]);
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [fileS3, setFileS3] = useState<string>("");

    useEffect(() => {
        setFileS3(fileInfo.file);
    }, [fileInfo, isModalOpen])

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        clearData();
        setIsModalOpen(false);
    };
    const clearData = () => {
        setFileList([]);
        setUploadProgress(0);
        setCurrent(0);
        setFileS3('')
    }
    return (
        <>
            <Button type={btnType.type} color={btnType.color} variant={btnType.variant} onClick={showModal}>
                {children}
            </Button>
            <Modal
                title={<span className='block text-center text-xl'>Cập nhật thông tin hình ảnh</span>}
                open={isModalOpen}
                maskClosable={false}
                onCancel={handleCancel}
                width={900}
                footer={[]}
            >
                <StepUpdate
                    setIsModalOpen={setIsModalOpen}
                    current={current}
                    setCurrent={setCurrent}
                    fileList={fileList}
                    setFileList={setFileList}
                    uploadProgress={uploadProgress}
                    setUploadProgress={setUploadProgress}
                    fileS3={fileS3}
                    setFileS3={setFileS3}
                    selects={selects}
                    fetchFileList={fetchFileList}
                    fileInfo={fileInfo}
                />
            </Modal>
        </>
    );
};

export default ModalUpdateFile;
