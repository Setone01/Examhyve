import Navbar from "./Components/NAVBAR/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import GlobalStyle from "./STYLES/GlobalStyles";
import Homepage from "./Components/Homepage/index";
import Courses from "./Components/CoursePage/index";
import Footer from "./Components/FOOTER/Footer";
import ViewCourse from "./Components/GetStarted/index";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <GlobalStyle /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/courses/test" element={<ViewCourse/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
