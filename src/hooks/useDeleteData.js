import baseUrl from "../Api/baseUrl";

/**
 * @hook useDeleteData
 * @desc delete data via an API
 * @param {*} url 
 * @param {*} params 
 * @returns {Response}
 */
const useDeleteData = async (url, params) => {
    const res = await baseUrl.delete(url, params);
    return res.data;
};

export default useDeleteData;
