import axios from "axios";

export const api = axios.create({
    baseURL: "someURL",
    headers: {
        "Content-Type": "application/json"
    }
});

// interceptors
api.interceptors.request.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            window.location.replace("/login");
            return Promise.reject(error);
        }
        if (error.response.status === 404) {
            return null;
        }
        if (axios.isAxiosError(error)) {
            console.error(
                "Something went wrong with the request. Status: " + error.message
            );
        }
    }
);
