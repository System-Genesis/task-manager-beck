import axios from 'axios';
import config from '../config/config'

// TODO: move file to repo of task manager and seperate to service task manager

const baseUrl = config.trakingURL; 

const buildRequest = async (
  requestType: string,
  url: string,
  requestParams?: object 
) => {
  const fullUrl = `${baseUrl}${url}`;
  console.log(fullUrl);
  
  const request = requestParams
    ? await axios[requestType.toLowerCase()](fullUrl, requestParams)
    : await axios[requestType.toLowerCase()](fullUrl);
    
  return request;
};

export default { buildRequest };
