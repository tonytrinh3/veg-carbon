import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CameraPage from './pages/CameraPage';
import ResultPage from './pages/ResultPage';
import LibraryPage from './pages/LibraryPage';



// function Index() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about/">About</Link>
//             </li>
//             <li>
//               <Link to="/users/">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         <Route path="/" exact component={Index} />
//         <Route path="/about/" component={About} />
//         <Route path="/users/" component={Users} />
//       </div>
//     </Router>
//   );
// }

// export default App;

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={CameraPage} />
        <Route path="/ResultPage" component={ResultPage} />
        <Route path="/LibraryPage" component={LibraryPage} />
      </div>
    </Router>
  );
}



// function Topic({ match }) {
//   return <h3>Requested Param: {match.params.id}</h3>;
// }

// function Topics({ match }) {
//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>

//       <Route path={`${match.path}/:id`} component={Topic} />
//       <Route
//         exact
//         path={match.path}
//         render={() => <h3>Please select a topic.</h3>}
//       />
//     </div>
//   );
// }

const Header = ()=> {
  return (
    <div className="ui inverted segment">
      Veggie Carbon
    </div>
  );
}

export default App;


