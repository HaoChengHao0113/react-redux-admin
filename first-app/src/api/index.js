import { request } from "./request";
export const getList = () => request('api/v1/lists/','GET')