import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Loading from '../components/Loading'

const IndexPage = React.lazy(() => import('../pages/Index'))
const FilePage = React.lazy(() => import('../pages/File'))
const NewFilePage = React.lazy(() => import('../pages/NewFile'))

export default function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/new/file" component={NewFilePage} />
          <Route path="/file/:fileID" component={FilePage} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}
