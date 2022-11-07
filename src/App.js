import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Template from './Components/Template';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template/>} > {/* wrap pages in the template */}
          <Route index element={<PageOne/>} />
          <Route path="pagetwo" element={<PageTwo/>}/>
          <Route path="pagethree" element={<PageThree/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
