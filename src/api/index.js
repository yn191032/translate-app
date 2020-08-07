import axios from "axios";

const axiosIstance = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
});

export const APICall = async (url, method, data) => {
  const res = await axiosIstance({ url, method, data });
  return res.data;
};