import axios from 'axios';
import { CHANGE_LOCATION } from './types';

const API_KEY = 'd76056027e21208416cbd8668218eb02';
const BASE_URL = 'api.openweathermap.org/data/2.5/weather';

export const changeLocation = location => {
  const url = `${BASE_URL}?q=${location}&appid=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: CHANGE_LOCATION,
    payload: request,
  };
};
