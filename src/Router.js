import React from 'react'
import { Switch, Route, Redirect, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'
import style from './index.less'

const { ConnectedRouter } = routerRedux

const Routers = function({ history, app }) {
  const error  = dynamic({
    app,
    component: () => import('./routes/error')
  })
  const routes = [{
    path: '/home',
    models   : () => [import('./models/home')],
    component: () => import('./routes/home/')
  }, {
    path: '/exercise',
    models   : () => [import('./models/exercise')],
    component: () => import('./routes/exercise/')
  }]
  
  return (
      <ConnectedRouter history={history}>
        <div className={style.app_container}>
          <Switch>
            <Route exact path="/" render={() => {
              return (<Redirect to="/home"/>)
            }}/>
            {
              routes.map(({ path, ...dynamics }, key) => (
                  <Route key={key}
                         exact
                         path={path}
                         component={dynamic({
                           app,
                           ...dynamics
                         })}
                  />
              ))
            }
            <Route component={error}/>
          </Switch>
        </div>
      </ConnectedRouter>
  )
}

export default Routers
