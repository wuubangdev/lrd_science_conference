import { Button, Form, FormInstance, Input, Select } from "antd";
import { ISelect } from "../../files/image/ImageManager";


interface IStepTwo {
    fileS3: string;
    selects: ISelect[];
    form: FormInstance<any>;
    onFinish: (values: IFile) => Promise<void>;
    fileInfo?: IFile;
}

const StepUploadTwo: React.FC<IStepTwo> = ({ fileS3, selects, form, onFinish }) => {

    return (
        <div className="w-full px-6 flex flex-col gap-3">
            <div className="w-full flex items-start">
                <span>
                    <span className="font-semibold">Tên ảnh trên bộ nhớ:</span> <br />
                    {(fileS3 !== "") ? fileS3 : <span className=" text-red-500"> Không có ảnh!</span>}
                </span>
            </div>
            <Form
                layout='vertical'
                name="upload_image"
                form={form}
                style={{ maxWidth: '100%' }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="title"
                    label={<span className="font-semibold">Tiêu đề của ảnh:</span>}
                    rules={[{ required: true, message: 'Vui lòng nhập tên ảnh!' }]}
                >
                    <Input placeholder="Title of file" disabled={fileS3 === ""} type="text" />
                </Form.Item>
                <Form.Item
                    name="catalog"
                    label={<span className="font-semibold">Thể loại của ảnh:</span>}
                    rules={[{ required: true, message: 'Vui lòng chọn thể loại!' }]}
                    className="flex"
                >
                    <Select
                        style={{ width: 220 }}
                        options={selects}
                        disabled={fileS3 === ""}
                    />
                </Form.Item>
                <Form.Item label={null} className="flex justify-end">
                    <Button type="primary" htmlType="submit" disabled={fileS3 === ""}>
                        Tạo thông tin ảnh
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default StepUploadTwo;