import * as React from 'react';
import { BrowserRouter as Router , Route } from "react-router-dom";
import About from './pages/about';
import Contact from './pages/contact';
import Header from './pages/header';
import Index from './pages/index';

class App extends React.Component {
  public render() {
    return (
        <Router>
            <div>
                <Header/>
                <Route path="/" exact={true} component={Index} />
                <Route path="/about/" component={About} />
                <Route path="/contact/" component={Contact} />
            </div>
        </Router>
    );
  }
}
export default App;
