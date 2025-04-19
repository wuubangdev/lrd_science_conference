// src/handsontable.d.ts
declare module 'handsontable' {
    const Handsontable: any;
    export = Handsontable;
}

interface ApiResponse<T> {
    statusCode: number;
    message: string;
    error: string | null;
    data: T
}

interface ApiPaginateResponse<T> {
    statusCode: number;
    error: string | null;
    message: string;
    data: {
        meta: {
            page: number;
            pageSize: number;
            pages: number;
            total: number;
        };
        result: T[];
    };
}

interface IFile {
    id: number;
    title: string;
    catalog: string;
    file: string;
}

interface IUser {
    id: number;
    userName: string;
    userRole: string;
}

interface IUserCreate {
    userName: string;
    password: string;
    userRole: string;
}

interface IHeroImage {
    id: number;
    image: string;
}

interface IServices {
    id: number;
    title: string;
    image: string;
    description: string;
    blogId: string;
}

interface IFacility {
    id: number,
    image: string,
    description: string,
}

interface IClientFeedback {
    id: number;
    name: string,
    avatar: string,
    feedback: string,
}

interface IStudentFeedback {
    id: number;
    name: string,
    avatar: string,
    feedback: string,
}

interface IContactInfo {
    id: number;
    hotLine: string; // URL liên kết đến Facebook
    timeWorking: string; // URL liên kết đến TikTok
    tuyendung: string; // URL liên kết đến Instagram
    tiepnhankhachhang: string; // Địa chỉ tiếp nhận khách hàng
    police: string; // URL bản đồ Google Maps
    customerFeedback: string; // Số điện thoại phản hồi
    chungnhan: string; // Email liên hệ
    zaloLink: string; // Liên kết hoặc thông tin Zalo
    youtubeLink: string; // Liên kết hoặc thông tin YouTube
    tikLink: string; // Liên kết hoặc thông tin TikTok
    address: string; // Email hoặc địa chỉ chung
}
interface IHeroPicture {
    id: number; // ID định danh
    introHero: string; // Phần giới thiệu Hero
    tattooHero: string; // Hero liên quan đến Tattoo
    skinCareHero: string; // Hero liên quan đến chăm sóc da
    cosmeticHero: string; // Hero liên quan đến mỹ phẩm
    academyHero: string; // Hero liên quan đến học viện
}
interface IBooking {
    id: number;       // ID định danh người dùng
    name: string;     // Tên người dùng
    phone: string;    // Số điện thoại
    service: string;  // Loại dịch vụ mà người dùng đã đăng ký
}
interface IPictureList {
    id: number;
    mainImage: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
    image6: string;
}

interface ISkincare {
    id: number;
    mainImage: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
    image6: string;
}

interface ISkinSick {
    id: number;
    mainImage: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
    image6: string;
    image7: string;
    image8: string;
}

interface ISkinAfterCare {
    id: number;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
}

interface ICosmeticPicture {
    id: number;
    mainImage: string;
}

interface IAcademyPicture {
    id: number;
    mainImage: string;
}

interface INewAndEvent {
    id: number;
    mainImage: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
    image6: string;
}
interface IUser {
    access_token: string;
    user: {
        id: number;
        userName: string;
        userRole: string | null;
    };
}

interface IFetchAccount {
    user: IUser;
}

interface IComponentBanner {
    id: number;
    homeComponentBanner: string;
    skincareComponentBanner: string;
    academyComponentBanner: string;
}

interface IBookingBanner {
    id: number;
    cosmeticBookingBanner: string;
    academyBookingBanner: string;
}

interface ICertification {
    id: number;
    certification: string[];
    award: string[];
    image: string;
}

interface IBlog {
    id: number;
    title: string;
    caterogy: string;
    content: string;
}