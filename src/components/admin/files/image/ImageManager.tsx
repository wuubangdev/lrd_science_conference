import { PlusCircleFilled } from "@ant-design/icons";
import ModalCreateFile from "./ModalCreateFile";
import FileTable from "./FileTable";
import { useEffect, useState } from "react";
import { Select } from "antd";
import { useNavigate } from "react-router";
import { getAllFile } from "../../../../services/apiServices";

export interface ISelect { value: string, label: string }
const selects: ISelect[] = [
    { value: '', label: 'All' },
    { value: 'home', label: 'Home' },
    { value: 'introduction', label: 'Introduction' },
    { value: 'tattoo', label: 'Tattoo' },
    { value: 'skincare', label: 'Skin care' },
    { value: 'cosmetic', label: 'Cosmetic' },
    { value: 'academy', label: 'Academy' },
]
const ImageManager = () => {
    const [fileList, setFileList] = useState<IFile[] | null>(null);
    const [selectValue, setSelectValue] = useState<string>('');

    // const navigate = useNavigate();
    // const isAuthenticated = !!localStorage.getItem("access_token");

    // useEffect(() => {
    //     if (!isAuthenticated) {
    //         navigate("/login");
    //     }
    // }, [isAuthenticated, navigate]);

    const fetchFileList = async () => {
        const response = await getAllFile(`catalog~'${selectValue}'`);
        setFileList(response.data.data.result)
    }

    useEffect(() => {
        fetchFileList();
    }, [selectValue])

    const handleChange = (value: string) => {
        setSelectValue(value);
    };

    return (
        <div>
            <div
                className=" mb-6 flex flex-col gap-3"
            >
                <h1 className="text-2xl font-semibold">Quản lý hình ảnh</h1>
                <div className=" flex justify-between">
                    <Select
                        defaultValue=""
                        style={{ width: 220 }}
                        onChange={handleChange}
                        options={selects}
                    />
                    <ModalCreateFile
                        selects={selects}
                        btnType={{
                            color: 'primary',
                            variant: 'outlined'
                        }}
                        fetchFileList={fetchFileList}
                    >
                        <PlusCircleFilled />
                        Tải lên hình ảnh
                    </ModalCreateFile>
                </div>
            </div>
            <div >
                <FileTable fileList={fileList!} fetchFileList={fetchFileList} selects={selects} />
            </div>
        </div>
    )
}

export default ImageManager;