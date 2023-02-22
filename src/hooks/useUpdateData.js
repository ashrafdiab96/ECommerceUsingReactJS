import baseUrl from "../Api/baseUrl";

/**
 * @hook useUpdateDataWithImage
 * @desc update data with images to an API
 * @param {*} url 
 * @param {*} params 
 * @returns {Response}
 */
const useUpdateDataWithImage = async (url, params) => {
    const config = {
        headers: {"Content-Type": "multipart/form-data"},
    };
    const res = await baseUrl.put(url, params, config);
    return res;
};

/**
 * @hook useUpdateData
 * @desc update data to an API
 * @param {*} url 
 * @param {*} params 
 * @returns {Response}
 */
const useUpdateData = async (url, params) => {
    const res = await baseUrl.put(url, params);
    return res;
};

export { useUpdateData, useUpdateDataWithImage };
