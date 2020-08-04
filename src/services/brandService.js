import request from '../utils/request';
import qs from 'qs';

// 初始化表格数据
export const initBrandService = async () => {
  return request('/api/initbrand');
};
// 根据条件查找表格数据
export const getBrandService = async submitInfo => {
  console.log('submitInfo', submitInfo);
  return request(
    '/api/brand?' + qs.stringify(submitInfo),
    {
      method: 'GET',
    });
};

export const deleteBrandService = async id => {
  const bodyInfo = JSON.stringify(id)
  return request(
    '/api/brand?'+`id=${id}`,
    {
      method: 'DELETE',
    });
};

export const editBrandService = async record => {
  const bodyInfo = JSON.stringify(record)
  return request(
    '/api/brand',
    {
      method: 'PUT',
      body: bodyInfo,
    });
};
