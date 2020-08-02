import request from '../utils/request';
import qs from 'qs';

// 初始化表格数据
export const initBrand = async () => {
  return request('/api/initbrand');
};
// 根据条件查找表格数据
export const getBrand = submitInfo => {
  console.log('submitInfo', submitInfo);
  // return request('/api/brandInfo?'+'brandName=undefined&&status=2',{
  //     method:'GET'
  // })
  return request('/api/brand?' + qs.stringify(submitInfo), {
    method: 'GET',
  });
};
