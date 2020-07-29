import request from '../utils/request'

export const getBrand = () => {
    return request('/api/brand')
}