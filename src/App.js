import Navbar from "./Components/NAVBAR/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./STYLES/GlobalStyles";
import Homepage from "./Components/PAGES/Homepage";
import Courses from "./Components/PAGES/Courses/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
