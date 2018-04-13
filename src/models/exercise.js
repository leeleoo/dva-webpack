import modelExtend from 'dva-model-extend'
import model from './base-model'
import { request } from 'utils'

export default modelExtend(model, {
  namespace    : 'exercise',
  state        : {},
  effects      : {
    * query({}, { put }) {
      const { data, meta } = request({
        url: ''
      })
    }
  },
  reducers     : {},
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({ type: 'query' })
        }
      })
    }
  }
})