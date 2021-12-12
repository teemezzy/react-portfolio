import Navbar from './components/Navbar'
import './App.css'
import Main from './components/Main'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
