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
      <Router>
        <Switch>
          <Route path="/ar-team-website" element={<Home />} />
          <Route
            path="/ar-team-website/InstructionsPage"
            element={<InstructionsPage />}
          />
          <Route path="/test" element={<>test</>} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
