import React from 'react'
import { BrowserRouter, Route, RouteComponentProps, RouteProps, Switch } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Friends from './pages/Friends'

interface IRouteProps extends RouteProps {
  component: React.FC<RouteComponentProps>
}

function PageRoute({ component: Page, ...props }: IRouteProps) {
  return (
    <Route
      {...props}
      component={(propsPage: any) => (
        <Header>
          <Page {...propsPage} />
        </Header>
      )}
    />
  )
}

function RoutesPages() {
  return (
    <BrowserRouter>
      <Switch>
        <PageRoute exact path="/" component={Home} />
        <PageRoute path="/:id" component={Friends} />
      </Switch>
    </BrowserRouter>
  )
}

export default RoutesPages
