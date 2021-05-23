import Header from './Header';
import React,{useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import Footer from './Footer';
import Home from '@material-ui/icons/Home';
import Subscription from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';


function App() {
  // let location=useLocation();
  // let {searchTerm} =usePrams();
  // const [flag,setFlag]=useState(false);


  return (
    <div className="App">   
      <Router>
      <Header />
        <Switch>
          <Route path="/search/:searchTerm">
          <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
        <div className="footer">
        <Footer  Icon={Home} Title="Home"/>
        <Footer Icon={Subscription} Title="Subscription" />
        <Footer Icon={VideoLibraryIcon} Title="Library" />
        <Footer Icon={HistoryIcon} Title="History"/>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
