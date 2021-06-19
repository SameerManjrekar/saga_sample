/* global axios */

export const getTestObjets = () => {
    debugger;
    const TEST_API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
    return axios.get(TEST_API_ENDPOINT)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return [];
        });
};