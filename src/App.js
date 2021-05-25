import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Videos  from './containers/videos/videos';
import Contact from './containers/contact/contact';
import Admin from './containers/admin/admin';
import Uploads from './containers/uploads/uploads';
import Footer from './components/footer/footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='content'>
          <Switch>
            <Route exact path="/" render={() => <Videos />} />
            <Route exact path="/uploads" render={() => <Uploads />} />
            <Route exact path="/admin" render={() => <Admin />} />
            <Route exact path="/contact" render={() => <Contact />} />
          </Switch>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
