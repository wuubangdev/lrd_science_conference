import axios from "../utils/axiosCustom";

const getFileById = (id: number) => {
    return axios.get(`api/v1/files/${id}`);
}
const postCreateNewFile = (file: Omit<IFile, 'id'>) => {
    return axios.post('api/v1/files', { ...file });
}
const putUpdateFile = (file: IFile) => {
    return axios.put('api/v1/files', { ...file });
}
const deleteFile = (id: number) => {
    return axios.delete(`api/v1/files/${id}`);
}
const getAllFile = (filter: string) => {
    return axios.get('api/v1/files', {
        params: {
            sort: 'id,desc',
            filter: filter,
            page: 1,
            size: 1000,
        }
    });
}
const getAllFileWithPaginate = (filter: string, page: number, size: number) => {
    return axios.get('api/v1/files', {
        params: {
            sort: 'id,desc',
            filter: filter,
            page: page,
            size: size,
        }
    });
}
const login = (userName: string, password: string) => {
    return axios.post(`api/v1/auth/login`, { userName, password });
}
const logout = () => {
    return axios.post(`api/v1/auth/logout`);
}
const register = (userName: string, password: string) => {
    return axios.post(`api/v1/auth/logout`, { userName, password });
}
const fetchAccount = () => {
    return axios.get(`api/v1/auth/account`);
}
const refreshToken = () => {
    return axios.post(`api/v1/auth/refresh`);
}

const postCreateNewUser = (userName: string, password: string, userRole: string) => {
    return axios.post('api/v1/users', { userName, password, userRole });
}
const getAllUser = () => {
    return axios.get('api/v1/users');
}
const getUserById = (id: number) => {
    return axios.get(`api/v1/users/${id}`);
}
const putUpdateUser = (id: number, userName: string, userRole: string) => {
    return axios.put('api/v1/users', { id, userName, userRole });
}
const deleteUser = (id: number) => {
    return axios.delete(`api/v1/users/${id}`);
}
const postCreateNewHeroImage = (heroes: Omit<IHeroImage, 'id'>) => {
    return axios.post('api/v1/heros', { ...heroes });
}
const getAllHeroImage = () => {
    return axios.get('api/v1/heros');
}
const getHeroImageById = (id: number) => {
    return axios.get(`api/v1/heros/${id}`);
}
const putUpdateHeroImage = (heroes: IHeroImage) => {
    return axios.put('api/v1/heros', { ...heroes });
}
const deleteHeroImage = (id: number) => {
    return axios.delete(`api/v1/heros/${id}`);
}
const postCreateNewMainService = (services: Omit<IServices, 'id'>) => {
    return axios.post('api/v1/main-services', { ...services });
}
const getAllMainService = () => {
    return axios.get('api/v1/main-services', {
        params: {
            sort: 'id,desc',
            page: 1,
            size: 50,
        }
    });
}
const getMainServiceById = (id: number) => {
    return axios.get(`api/v1/main-services/${id}`);
}
const putUpdateMainService = (services: IServices) => {
    return axios.put('api/v1/main-services', { ...services });
}
const deleteMainService = (id: number) => {
    return axios.delete(`api/v1/main-services/${id}`);
}


const postCreateNewSkinCareService = (services: Omit<IServices, 'id'>) => {
    return axios.post('api/v1/skincare-services', { ...services });
}
const getAllSkinCareService = () => {
    return axios.get('api/v1/skincare-services', {
        params: {
            sort: 'id,desc',
            page: 1,
            size: 50,
        }
    });
}
const getSkinCareServiceById = (id: number) => {
    return axios.get(`api/v1/skincare-services/${id}`);
}
const putUpdateSkinCareService = (services: IServices) => {
    return axios.put('api/v1/skincare-services', { ...services });
}
const deleteSkinCareService = (id: number) => {
    return axios.delete(`api/v1/skincare-services/${id}`);
}

const postCreateNewTattooService = (services: Omit<IServices, 'id'>) => {
    return axios.post('api/v1/tattoo-services', { ...services });
}
const getAllTattooService = () => {
    return axios.get('api/v1/tattoo-services', {
        params: {
            sort: 'id,desc',
            page: 1,
            size: 50,
        }
    });
}
const getTattooServiceById = (id: number) => {
    return axios.get(`api/v1/tattoo-services/${id}`);
}
const putUpdateTattooService = (services: IServices) => {
    return axios.put('api/v1/tattoo-services', { ...services });
}
const deleteTattooService = (id: number) => {
    return axios.delete(`api/v1/tattoo-services/${id}`);
}

const postCreateNewCosmeticService = (services: Omit<IServices, 'id'>) => {
    return axios.post('api/v1/cosmetic-services', { ...services });
}
const getAllCosmeticService = () => {
    return axios.get('api/v1/cosmetic-services', {
        params: {
            sort: 'id,desc',
            page: 1,
            size: 50,
        }
    });
}
const getCosmeticServiceById = (id: number) => {
    return axios.get(`api/v1/cosmetic-services/${id}`);
}
const putUpdateCosmeticService = (services: IServices) => {
    return axios.put('api/v1/cosmetic-services', { ...services });
}
const deleteCosmeticService = (id: number) => {
    return axios.delete(`api/v1/cosmetic-services/${id}`);
}

const getFacilityById = () => {
    return axios.get(`api/v1/facility/1`);
}
const putUpdateFacility = (facility: IFacility) => {
    return axios.put('api/v1/facility', { ...facility });
}

const postCreateNewClientFeedback = (clientFeedback: Omit<IClientFeedback, 'id'>) => {
    return axios.post('api/v1/customer-feedback', { ...clientFeedback });
}
const getAllClientFeedback = () => {
    return axios.get('api/v1/customer-feedback', {
        params: {
            sort: 'id,desc',
            page: 1,
            size: 50,
        }
    });
}
const getClientFeedbackById = (id: number) => {
    return axios.get(`api/v1/customer-feedback/${id}`);
}
const putUpdateClientFeedback = (clientFeedback: IClientFeedback) => {
    return axios.put('api/v1/customer-feedback', { ...clientFeedback });
}
const deleteClientFeedback = (id: number) => {
    return axios.delete(`api/v1/customer-feedback/${id}`);
}

const postCreateNewStudentFeedback = (studentFeedback: Omit<IStudentFeedback, 'id'>) => {
    return axios.post('api/v1/student-feedback', { ...studentFeedback });
}
const getAllStudentFeedback = () => {
    return axios.get('api/v1/student-feedback', {
        params: {
            sort: 'id,desc',
            page: 1,
            size: 50,
        }
    });
}
const getStudentFeedbackById = (id: number) => {
    return axios.get(`api/v1/student-feedback/${id}`);
}
const putUpdateStudentFeedback = (studentFeedback: IStudentFeedback) => {
    return axios.put('api/v1/student-feedback', { ...studentFeedback });
}
const deleteStudentFeedback = (id: number) => {
    return axios.delete(`api/v1/student-feedback/${id}`);
}

const postCreateNewContact = (contactInfo: Omit<IContactInfo, 'id'>) => {
    return axios.post('api/v1/contact', { ...contactInfo });
}
const getAllContact = () => {
    return axios.get('api/v1/contact', {
        params: {
            sort: 'id,desc',
            page: 1,
            size: 50,
        }
    });
}
const getContactById = (id: number) => {
    return axios.get(`api/v1/contact/${id}`);
}
const putUpdateContact = (contactInfo: IContactInfo) => {
    return axios.put('api/v1/contact', { ...contactInfo });
}
const deleteContact = (id: number) => {
    return axios.delete(`api/v1/contact/${id}`);
}

const postCreateNewHeroPicture = (heroPicture: Omit<IHeroPicture, 'id'>) => {
    return axios.post('api/v1/hero-picture', { ...heroPicture });
}
const getAllHeroPicture = () => {
    return axios.get('api/v1/hero-picture', {
        params: {
            sort: 'id,desc',
            page: 1,
            size: 50,
        }
    });
}
const getHeroPictureById = (id: number) => {
    return axios.get(`api/v1/hero-picture/${id}`);
}
const putUpdateHeroPicture = (heroPicture: IHeroPicture) => {
    return axios.put('api/v1/hero-picture', { ...heroPicture });
}
const deleteHeroPicture = (id: number) => {
    return axios.delete(`api/v1/hero-picture/${id}`);
}

const postCreateNewBooking = (bookingInfo: Omit<IBooking, 'id'>) => {
    return axios.post('api/v1/booking-info', { ...bookingInfo });
}
const getAllBooking = () => {
    return axios.get('api/v1/booking-info', {
        params: {
            sort: 'id,desc',
            page: 1,
            size: 50000,
        }
    });
}
const getBookingById = (id: number) => {
    return axios.get(`api/v1/booking-info/${id}`);
}
const putUpdateBooking = (bookingInfo: IBooking) => {
    return axios.put('api/v1/booking-info', { ...bookingInfo });
}
const deleteBooking = (id: number) => {
    return axios.delete(`api/v1/booking-info/${id}`);
}

const getCPIntroById = (id: number) => {
    return axios.get(`api/v1/picture-intro/${id}`);
}
const putUpdateCPIntro = (pictureList: Omit<IPictureList, 'mainImage'>) => {
    return axios.put('api/v1/picture-intro', { ...pictureList });
}
const getCPTattooById = (id: number) => {
    return axios.get(`api/v1/picture-tattoo/${id}`);
}
const putUpdateCPTattoo = (pictureList: IPictureList) => {
    return axios.put('api/v1/picture-tattoo', { ...pictureList });
}
const getCPAfterTattooById = (id: number) => {
    return axios.get(`api/v1/picture-after-tattoo/${id}`);
}
const putUpdateCPAfterTattoo = (pictureList: Omit<IPictureList, 'mainImage'>) => {
    return axios.put('api/v1/picture-after-tattoo', { ...pictureList });
}

const getCPSkinSickById = (id: number) => {
    return axios.get(`api/v1/picture-skin-sick/${id}`);
}
const putUpdateCPSkinSick = (skinSick: ISkinSick) => {
    return axios.put('api/v1/picture-skin-sick', { ...skinSick });
}

const getCPSkinAfterCareById = (id: number) => {
    return axios.get(`api/v1/picture-skin-after-care/${id}`);
}
const putUpdateCPSkinAfterCare = (skinAfterCare: ISkinAfterCare) => {
    return axios.put('api/v1/picture-skin-after-care', { ...skinAfterCare });
}
const getCPSkinCareById = (id: number) => {
    return axios.get(`api/v1/picture-skin-care/${id}`);
}
const putUpdateCPSkinCare = (skinCare: ISkincare) => {
    return axios.put('api/v1/picture-skin-care', { ...skinCare });
}
// Cosmetic [After use]
const postCreateCPAfterUseCosmetic = (cosmeticPicture: Omit<ICosmeticPicture, 'id'>) => {
    return axios.post('api/v1/picture-after-cosmetic', { ...cosmeticPicture });
}
const getAllCPAfterUseCosmetic = () => {
    return axios.get('api/v1/picture-after-cosmetic', {
        params: {
            sort: 'id,desc',
            page: 1,
            size: 500,
        }
    });
}
const getCPAfterUseCosmeticById = (id: number) => {
    return axios.get(`api/v1/picture-after-cosmetic/${id}`);
}
const putUpdateCPAfterUseCosmetic = (cosmeticPicture: ICosmeticPicture) => {
    return axios.put('api/v1/picture-after-cosmetic', { ...cosmeticPicture });
}
const deleteCPAfterUseCosmetic = (id: number) => {
    return axios.delete(`api/v1/picture-after-cosmetic/${id}`);
}
// Cosmetic feedback
const postCreateCPFeedbackCosmetic = (cosmeticPicture: Omit<ICosmeticPicture, 'id'>) => {
    return axios.post('api/v1/picture-feedback-cosmetic', { ...cosmeticPicture });
}
const getAllCPFeedbackCosmetic = () => {
    return axios.get('api/v1/picture-feedback-cosmetic', {
        params: {
            sort: 'id,desc',
            page: 1,
            size: 500,
        }
    });
}
const getCPFeedbackCosmeticById = (id: number) => {
    return axios.get(`api/v1/picture-feedback-cosmetic/${id}`);
}
const putUpdateCPFeedbackCosmetic = (cosmeticPicture: ICosmeticPicture) => {
    return axios.put('api/v1/picture-feedback-cosmetic', { ...cosmeticPicture });
}
const deleteCPFeedbackCosmetic = (id: number) => {
    return axios.delete(`api/v1/picture-feedback-cosmetic/${id}`);
}
// Academy booking banner
const postCreateAcademyBookingBanner = (academyPicture: Omit<IAcademyPicture, 'id'>) => {
    return axios.post('api/v1/academy-book-banner', { ...academyPicture });
}
const getAllAcademyBookingBanner = () => {
    return axios.get('api/v1/academy-book-banner', {
        params: {
            sort: 'id,desc',
            page: 1,
            size: 500,
        }
    });
}
const getAcademyBookingBannerById = (id: number) => {
    return axios.get(`api/v1/academy-book-banner/${id}`);
}
const putUpdateAcademyBookingBanner = (academyPicture: IAcademyPicture) => {
    return axios.put('api/v1/academy-book-banner', { ...academyPicture });
}
const deleteAcademyBookingBanner = (id: number) => {
    return axios.delete(`api/v1/academy-book-banner/${id}`);
}
// New and event
const postCreateNewAndEvent = (newAndEvent: Omit<INewAndEvent, 'id'>) => {
    return axios.post('api/v1/new-and-event', { ...newAndEvent });
}
const getAllNewAndEvent = () => {
    return axios.get('api/v1/new-and-event', {
        params: {
            sort: 'id,desc',
            page: 1,
            size: 500,
        }
    });
}
const getNewAndEventById = (id: number) => {
    return axios.get(`api/v1/new-and-event/${id}`);
}
const putUpdateNewAndEvent = (newAndEvent: INewAndEvent) => {
    return axios.put('api/v1/new-and-event', { ...newAndEvent });
}
const deleteNewAndEvent = (id: number) => {
    return axios.delete(`api/v1/new-and-event/${id}`);
}

export {
    postCreateNewUser,
    getAllUser,
    getUserById,
    putUpdateUser,
    deleteUser,
    getAllFile,
    getAllFileWithPaginate,
    postCreateNewHeroImage,
    getAllHeroImage,
    getHeroImageById,
    putUpdateHeroImage,
    deleteHeroImage,
    getFileById,
    postCreateNewFile,
    putUpdateFile,
    deleteFile,
    login,
    logout,
    fetchAccount,
    refreshToken,
    register,
    postCreateNewMainService,
    getAllMainService,
    getMainServiceById,
    putUpdateMainService,
    deleteMainService,
    postCreateNewCosmeticService,
    postCreateNewTattooService,
    postCreateNewSkinCareService,
    getAllCosmeticService,
    getAllTattooService,
    getAllSkinCareService,
    getCosmeticServiceById,
    getTattooServiceById,
    getSkinCareServiceById,
    putUpdateCosmeticService,
    putUpdateTattooService,
    putUpdateSkinCareService,
    deleteCosmeticService,
    deleteTattooService,
    deleteSkinCareService,
    getFacilityById,
    putUpdateFacility,
    postCreateNewClientFeedback,
    getAllClientFeedback,
    getClientFeedbackById,
    putUpdateClientFeedback,
    deleteClientFeedback,
    postCreateNewContact,
    getAllContact,
    getContactById,
    putUpdateContact,
    deleteContact,
    postCreateNewHeroPicture,
    getAllHeroPicture,
    getHeroPictureById,
    putUpdateHeroPicture,
    deleteHeroPicture,
    postCreateNewStudentFeedback,
    putUpdateStudentFeedback,
    getAllStudentFeedback,
    getStudentFeedbackById,
    deleteStudentFeedback,
    postCreateNewBooking,
    getAllBooking,
    getBookingById,
    putUpdateBooking,
    deleteBooking,
    getCPIntroById,
    getCPAfterTattooById,
    getCPTattooById,
    putUpdateCPIntro,
    putUpdateCPAfterTattoo,
    putUpdateCPTattoo,
    getCPSkinSickById,
    getCPSkinAfterCareById,
    getCPSkinCareById,
    putUpdateCPSkinSick,
    putUpdateCPSkinAfterCare,
    putUpdateCPSkinCare,
    postCreateCPAfterUseCosmetic,
    postCreateCPFeedbackCosmetic,
    getAllCPAfterUseCosmetic,
    getAllCPFeedbackCosmetic,
    getCPAfterUseCosmeticById,
    getCPFeedbackCosmeticById,
    putUpdateCPAfterUseCosmetic,
    putUpdateCPFeedbackCosmetic,
    deleteCPAfterUseCosmetic,
    deleteCPFeedbackCosmetic,
    postCreateAcademyBookingBanner,
    getAllAcademyBookingBanner,
    getAcademyBookingBannerById,
    putUpdateAcademyBookingBanner,
    deleteAcademyBookingBanner,
    postCreateNewAndEvent,
    getAllNewAndEvent,
    getNewAndEventById,
    putUpdateNewAndEvent,
    deleteNewAndEvent
};