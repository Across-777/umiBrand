import {getBrand} from '../services/brandService'

export default {
    namespace:'brand',
    state:{
        value:0,
        date:'',
    },
    effects: {
        *redirect({payload},{call,select,put}){
            const  data  = yield call(getBrand);
            console.log(data);
            // yield put({type: 'updateState', payload})
            payload.date = date;
            yield put({type:'updateState',payload});
            
        }
    },
    reducers: {
        updateState(state, {payload}) {
            console.log('reducers payload date',payload.data);
            return {
                ...state,
                ...payload
            }
        },
    }

}