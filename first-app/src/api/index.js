import { request } from "./request";
export const getList = () => request('/apc/api/v1/lists/','GET')
export const getMusicList = (query) => request('/musicapc/v1/restserver/ting',"GET",query)