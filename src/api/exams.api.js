const GET_LIST_URL = '/tests';

export const fetchExamsList = (offset = 0, limit = 20) => {
  let page = Math.trunc(offset / limit) + 1;
  return fetch(process.env.REACT_APP_API_URL + GET_LIST_URL
    + '?' + (new URLSearchParams({
      page,
      perPage: limit
    })).toString())
}