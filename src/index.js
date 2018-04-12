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
app.model(require('./models/index'))

// 3. Router
app.router(require('./Router'))

// 4. Start
app.start('#root')

