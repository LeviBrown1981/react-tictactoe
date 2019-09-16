import React from "react"
import { Route, Switch,  } from 'react-router-dom';
import Home from "./components/Home";
import Game from "./components/Game";
import Nav from "./components/Nav";

const App = () => (
  <>
  <Nav />
    <Switch>
      <Route exact path= "/" component={Home} />
      <Route exact path="/game"  component={Game} />
      {/* <Route component={NoMatch}/> */}
    </Switch>
  </>
);


// class App extends React.Component {
//   render() {
//     return (
//       <div className="app">
//         <BrowserRouter>
//           <Route path="/board" component={Board}/>
//         </BrowserRouter>
//       </div>
//     )
//   }
// }

export default App;