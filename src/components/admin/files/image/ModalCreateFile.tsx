import { useState } from 'react';
import { Button, Modal } from 'antd';
import { BaseButtonProps } from 'antd/es/button/button';
import { ISelect } from './ImageManager';
import StepUpload from '../../upload/image/StepUpload';

export interface IModalButton {
    selects: ISelect[];
    btnType: BaseButtonProps;
    children: React.ReactNode;
    fetchFileList: () => Promise<void>;
}

const ModalCreateFile = (props: IModalButton) => {
    const { btnType, children, selects, fetchFileList } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [current, setCurrent] = useState(0);
    const [fileList, setFileList] = useState<any[]>([]);
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [fileS3, setFileS3] = useState<string>("");

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
                title={<span className='block text-center text-xl'>Tải lên hình</span>}
                open={isModalOpen}
                maskClosable={false}
                onCancel={handleCancel}
                width={900}
                footer={[
                    // <Button onClick={() => handleCancel()}>Cancel</Button>
                ]}
            >
                <StepUpload
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
                />
            </Modal>
        </>
    );
};

export default ModalCreateFile;
