import Navbar from "./Navbar";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HTML from './Component/HTML';
import CSS from './Component/CSS';
import General from './Component/General';
import JavaScript from './Component/JavaScript';
import RTFFields from "./Component/RTFFields";
import Scss from "./Component/Sass"

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navbar />}>
              <Route index element={<General />} />
                <Route path="/html" element={<HTML />} />
                <Route path="/css" element={<CSS />} />
                <Route path="/general" element={<General />} />
                <Route path="/field" element={<RTFFields />} />
                <Route path="/js" element={<JavaScript />} />
                <Route path="/scss" element={<Scss />} />
              </Route>
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
