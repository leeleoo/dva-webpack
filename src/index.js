import dva from 'dva'
import createLoading from 'dva-loading'
import createHistory from 'history/createBrowserHistory'

window.namespace = {}

// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true,
  }),
  history:createHistory(),
  onError (error) {
    console.log('error',error)
  },
})

// 2. Model
//console.log(require('./models/index'))
app.model(require('./models/index').default)

// 3. Router
app.router(require('./Router').default)

// 4. Start
app.start('#root')

