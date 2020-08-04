import { initBrandService, getBrandService ,deleteBrandService} from '../services/brandService';

export default {
  namespace: 'brand',
  state: {
    value: 0,
    data: {
      data: {
        content: [
          {
            id: '1',
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
          },
        ],
        total: 1,
        page: 1,
        size: 10
      },
    },
  },
  effects: {
    // *redirect({ payload }, { call, select, put }) {
    //     const data = yield call(getBrand);
    //     console.log(data);
    //     payload.date = date;
    //     yield put({ type: 'updateState', payload });
    // },
    *initBrandInfo({ payload }, { call, select, put }) {
      const data = yield call(initBrandService);
      yield put({ type: 'updateState', payload: { data: data } });
    },
    *getBrandInfo({ payload }, { call, select, put }) {
      // console.log('getBrandInfoByInfo');
      const data = yield call(getBrandService, payload.submitInfo);
      yield put({ type: 'updateState', payload: { data: data } });
    },
    *deleteBrand({ payload }, { call, select, put }) {
      console.log('payload.id',payload.id);
      const data = yield call(deleteBrandService, payload.id);
      
    },
  },
  reducers: {
    updateState(state, { payload }) {
      console.log('reducers payload data', payload.data);
      return {
        ...state,
        ...payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/option') {
          dispatch({
            type: 'initBrandInfo',
            // payload: {
            //     page: 1,
            //     size: 10,
            // }
          });
        }
      });
    },
    
  },
};
