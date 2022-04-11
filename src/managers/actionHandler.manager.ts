import axios from 'axios';

const baseUrl = 'http://tracking.branch-yesodot.org/api/';

const buildRequest = async (
  requestType: string,
  url: string,
  requestParams: any
) => {
  const fullUrl = `${baseUrl}${url}`;

  const request = requestParams
    ? await axios[requestType](fullUrl, requestParams)
    : await axios[requestType](fullUrl);

  console.log(request);
  return request;
};

// const setDaily = async (hour: string[], minute: string[]) => {

//     const postDaily = await axios.post('http://tracking.branch-yesodot.org/api/daily',{
//         hour,minute
//     })
//     console.log(hour, minute);

//     return postDaily;
// };

export default { buildRequest };
