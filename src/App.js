import React from 'react'
import { NavBar, ImageGrid } from './components'
import {
  Home,
  Footer,
  Login,
  Register,
  Edit,
  PhoneSignUp,
  UserHome,
  CreatorHome,
  PostCreate,
} from './pages/'
import PrivateRoute from './routes/PrivateRoute'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom'

import { PostProvider } from './context/PostContext'
import { RouterRounded } from '@mui/icons-material'

function App() {
  return (
    <>
      <NavBar />
      {/*<Footer /> */}
      <Switch>
        <Route exact={true} path='/' component={Home} />

        <Route path='/login' component={Login} />

        <Route exact={true} path='/register' component={Register} />
        <Route path='/register/phone' component={PhoneSignUp} />
        <Route path='/edit' component={Edit} />

        <Route path='/home'>
          <UserHome />
        </Route>

        <Route path='/creator-home'>
          <CreatorHome />
        </Route>

        <Route path='/gi'>
          <ImageGrid />
        </Route>

        <PostProvider>
          <Route path='/post-create' component={PostCreate} />
        </PostProvider>

        <Route path='*' component={Error} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
