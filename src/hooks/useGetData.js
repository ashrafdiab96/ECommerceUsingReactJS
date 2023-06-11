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

/**
 * @hook useGetDataToken
 * @desc fetch data by token from an API
 * @param {*} url
 * @returns {Response}
 */
const useGetDataToken = async (url) => {
    const token = localStorage.getItem("token");
    let config = {};
    if (token) {
        config = {
            headers: { Authorization: `Bearer ${token}` }
        }
    }
    const res = await baseUrl.get(url, config);
    return res.data;
};

export { useGetData, useGetDataToken };
