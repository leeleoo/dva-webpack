import React from 'react'
import { Switch, Route, Redirect, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'

const { ConnectedRouter } = routerRedux

const Routers = function({ history, app }) {
  const error  = dynamic({
    app,
    component: () => import('./routes/error')
  })
  const routes = [

  ]
  
  return (
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route exact path="/" render={() => {
              return (<Redirect to="/"/>)
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
