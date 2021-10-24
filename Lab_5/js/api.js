const BASE_URL = "http://localhost:5000/";
const RESOURSE_URL = `${BASE_URL}/api/posts`;


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

export const getAllItems = async () => {
    const rawResponse = await baseRequest({ method: "GET" });

    return await rawResponse.json();
};
