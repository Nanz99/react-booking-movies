import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './features/pages/HomePage';
import SingleMoviePage from './features/pages/SingleMoviePage';
import ErrorPage from './features/pages/ErrorPage';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/:id' component={SingleMoviePage} />
        <Route path='*' component={ErrorPage} />
      </Switch>
    </Router>
  );
}




export default App;
