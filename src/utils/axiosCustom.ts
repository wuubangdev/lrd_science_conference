import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;


const instance = axios.create({
    baseURL: apiUrl,
    timeout: 10000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    (config) => {
        const assetToken = localStorage.getItem("access_token");
        if (assetToken) {
            config.headers["Authorization"] = `Bearer ${assetToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            try {
                const response = await axios.get(
                    `${apiUrl}api/v1/auth/refresh`,
                    {
                        withCredentials: true,
                    }
                );
                if (response.status === 200) {
                    const newAccessToken = response.data.data.access_token;
                    localStorage.setItem("access_token", newAccessToken);
                    originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                    return instance(originalRequest);
                }
            } catch (refreshError) {
                console.log("Token refresh failed", refreshError);
                localStorage.removeItem("access_token");
            }
        }
        return Promise.reject(error);
    }
);
export default instance;
