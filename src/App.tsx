import './App.css'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom'
import Home from './components/Home'
import InstructionsPage from './components/InstructionsPage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/ar-team-website" element={<Home />} />
            <Route
              path="/SRC_Website_React/entry"
              element={<InstructionsPage />}
            />
            <Route path="/test" element={<>test</>} />
          </Switch>
        </Router>
      </header>
    </div>
  )
}

export default App
