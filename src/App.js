import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Routes
import Home from './views/home'
import StockScreener from './pages/stockScreener'
import VisualSorting from './pages/visualSorting'

function App() {
  return (
    <Router>
      <div className="font-poppins">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/stock/screener" component={StockScreener}/>
          <Route exact path="/algorithms/sorting" component={VisualSorting}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
