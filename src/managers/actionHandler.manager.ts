import axios from 'axios';
import config from '../config/config'

// TODO: move file to repo of task manager and seperate to service task manager

const baseUrl = config.trakingURL; // TODO: move into env

const buildRequest = async (
  requestType: string,
  url: string,
  requestParams: any
) => {
  const fullUrl = `${baseUrl}${url}`;

  // TODO: is condition necessary? req.body.params is either empty, never undefined?
  const request = requestParams
    ? await axios[requestType](fullUrl, requestParams)
    : await axios[requestType](fullUrl);

  return request;
};

export default { buildRequest };
