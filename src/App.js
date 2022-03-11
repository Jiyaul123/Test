import React from "react";
import Home from "./pages/homePage/Home";
import Post from "./pages/postPage/Post"
import Header from "./components/Header"
import PostDetail from "./pages/postPage/PostDetail";
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import './app.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/add-post" component={Post}/>
          <Route path = "/posts/:postId" component={PostDetail}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
