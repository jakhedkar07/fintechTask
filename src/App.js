import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Features from './components/Features';
import Footer from './components/Footer';
import News from './components/News';
import NewsItem from './components/NewsItem';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   RouterProvider,
// } from "react-router-dom";
// import {Switch} from "react-router";



function App() {
  return (
    // <Router>
    <div>
    //    <Navbar /> 
    {/* //    <Switch>
    //     <Route path="">

    //     </Route>
    //     <Route path="">

    //     </Route>
    //     </Switch> */}
       <Main />
       <NewsItem />
       <Features/>
       <Footer/>
    // </div>
    // </Router>
  );
}

export default App;