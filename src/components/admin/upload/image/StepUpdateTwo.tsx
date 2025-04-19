import { Button, Form, FormInstance, Input, InputNumber, Select } from "antd";
import { ISelect } from "../../files/image/ImageManager";


interface IStepTwo {
    fileS3: string;
    selects: ISelect[];
    form: FormInstance<any>;
    onFinish: (values: IFile) => Promise<void>;
    fileInfo?: IFile;
}

const StepUpdateTwo: React.FC<IStepTwo> = ({ fileS3, selects, form, fileInfo, onFinish }) => {
    const initialValues = {
        id: fileInfo?.id || "",
        title: fileInfo?.title || "",
        catalog: fileInfo?.catalog || "",
    };

    return (
        <div className="w-full px-6 flex flex-col gap-3">
            <div className="w-full flex items-start">
                <span>
                    <span className="font-semibold">File name S3:</span> <br />
                    {(fileS3 !== "") ? fileS3 : <span className=" text-red-500"> Không có hình ảnh!</span>}
                </span>
            </div>
            <Form
                layout='vertical'
                initialValues={initialValues}
                name="update_image"
                form={form}
                style={{ maxWidth: '100%' }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="id"
                    hidden
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    name="title"
                    label={<span className="font-semibold">Tiêu đề của ảnh:</span>}
                    rules={[{ required: true, message: 'Please input title!' }]}
                >
                    <Input placeholder="Title of file" disabled={fileS3 === ""} type="text" />
                </Form.Item>
                <Form.Item
                    name="catalog"
                    label={<span className="font-semibold">Thể loại của ảnh:</span>}
                    rules={[{ required: true, message: 'Please input category!' }]}
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
                        Cập nhật thông tin ảnh
                    </Button>
                </Form.Item>

            </Form>
        </div>
    )
}

export default StepUpdateTwo