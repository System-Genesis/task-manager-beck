import axios from 'axios';

const baseUrl = 'http://genesis-tracking.branch-yesodot.org/api/';

const buildRequest = async (
  requestType: string,
  url: string,
  requestParams: any
) => {
  const fullUrl = `${baseUrl}${url}`;
  
  const request = requestParams
  ? await axios[requestType](fullUrl, requestParams)
  : await axios[requestType](fullUrl);
  
  return request;
};

export default { buildRequest };
