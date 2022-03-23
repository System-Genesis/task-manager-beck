// import paramsInterface from '../interfaces/params.interface'
import axios from 'axios';

const baseUrl = 'http://tracking.branch-yesodot.org/api/'

const buildUrl = async (requestType: string, url: string) => {
    const fullUrl = `${baseUrl}${url}`
    const request = await axios[requestType](fullUrl)
    return request;
};
  
export default { buildUrl }