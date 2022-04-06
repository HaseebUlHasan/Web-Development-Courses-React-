import Navbar from "./Navbar";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HTML from './Component/HTML';
import CSS from './Component/CSS';
import Git from './Component/Git';
import JavaScript from './Component/JavaScript';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navbar />}>
              <Route index element={<HTML />} />
                <Route path="/html" element={<HTML />} />
                <Route path="/css" element={<CSS />} />
                <Route path="/git" element={<Git />} />
                <Route path="/js" element={<JavaScript />} />
              </Route>
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
