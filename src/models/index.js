import modelExtend from 'dva-model-extend'
import { request } from '../utils'
import baseModal from './base-model'

export default modelExtend(baseModal, {
  namespace    : 'app',
  state        : {
    initial: false
  },
  effects      : {
    * query({}, { put }) {
      yield put({
        type   : 'updateState',
        payload: {
          initial: true
        }
      })
    }
  },
  reducers     : {},
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/index') {
          dispatch({ type: 'query' })
        }
      })
    }
  }
})