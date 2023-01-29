import baseUrl from "../Api/baseUrl";

/**
 * @hook useInsertDataWithImage
 * @desc insert data with images to an API
 * @param {*} url 
 * @param {*} params 
 * @returns {Response}
 */
const useInsertDataWithImage = async (url, params) => {
    const config = {
        headers: {"Content-Type": "multipart/form-data"},
    };
    const res = await baseUrl.post(url, params, config);
    return res;
};

/**
 * @hook useInsertData
 * @desc insert data to an API
 * @param {*} url 
 * @param {*} params 
 * @returns {Response}
 */
const useInsertData = async (url, params) => {
    const res = await baseUrl.post(url, params);
    return res;
};

export { useInsertData, useInsertDataWithImage };
