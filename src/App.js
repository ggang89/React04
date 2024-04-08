import Home from "./routes/Home";
import Detail from "./routes/Detail";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

function App() {
 return(
  <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path=".movie/:id" element={<Detail/>}/>
      <Route path="*" element={<h1>Not Found Page</h1>}/>
    </Routes>
  </Router>
 )
}

export default App;
