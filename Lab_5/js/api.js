// const BASE_URL = 'http://localhost:5000/api';
// const RESOURSE_URL = `${BASE_URL}/posts`;
const BASE_URL = 'http://127.0.0.1:5000';
const RESOURSE_URL = `${BASE_URL}/devices`;


const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }

        return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};

export const getAll = async () => {
    const rawResponse = await baseRequest({ method: "GET" });

    return await rawResponse.json();
};

export const create = (body) => baseRequest({ method: "POST", body });

// export const updateItems = (body) => baseRequest({ method: "PUT", body });
export const updateItems = (id, body) =>
    baseRequest({ urlPath: `/${id}`, method: "PUT", body });

export const deleteItems = (id) =>
    baseRequest({ urlPath: `/${id}`, method: "DELETE" });