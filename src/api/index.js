import axios from "axios";

const axiosIstance = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
});

const APICall = async (url, method, data) => {
  const res = await axiosIstance({ url, method, data });
  return res.data;
};

export const getLangs = async () => {
  return await APICall('/langs/custom', 'GET');
};

export const setLangs = async (from, to) => {
  return await APICall('/langs/custom', 'POST', { from, to });
};

export const getLangsOptions = async () => {
  return await APICall('/langs/options', 'GET');
};

export const getSuggests = async (from, to, phrase) => {
  return await APICall(`/suggests/${from}/${to}/${phrase}`, 'GET');
};

export const getSearchResults = async (from, to, phrase) => {
  return await APICall(`/search/${from}/${to}/${phrase}`, 'GET');
};

export const getHistory = async () => {
  return await APICall('/history', 'GET');
};

export const getPhrasebook = async () => {
  return await APICall('/phrasebook', 'GET');
};