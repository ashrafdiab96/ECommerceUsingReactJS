import baseUrl from "../Api/baseUrl";

/**
 * @hook useGetData
 * @desc fetch data from an API
 * @param {*} url 
 * @param {*} params 
 * @returns {Response}
 */
const useGetData = async (url, params) => {
    const res = await baseUrl.get(url, params);
    return res.data;
};

export default useGetData;
