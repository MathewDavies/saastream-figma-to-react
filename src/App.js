import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Template from './Layout/Template';
import Home from './pages/Home';



import PageThree from './pages/PageThree';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template/>} > {/* wrap pages in the template */}
          <Route index element={<Home/>} />
          <Route path="PageThree" element={<PageThree/>}/>
          
          {/* <Route path="pagethree" element={<PageThree/>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
