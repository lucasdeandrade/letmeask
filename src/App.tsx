import {Home} from './pages/home'
import { NewRoom } from './pages/NewRoom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {AuthContextProvider} from './contexts/AuthContext'

function App() {

  return (
    <BrowserRouter>
      <Switch> 
          <AuthContextProvider>
            <Route path='/' exact component={Home}></Route>
            <Route path='/rooms/new'  component={NewRoom}></Route> 
          </AuthContextProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
