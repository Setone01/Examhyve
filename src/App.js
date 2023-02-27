import Navbar from "./Components/NAVBAR/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import GlobalStyle from "./STYLES/GlobalStyles";
import Homepage from "./Components/Homepage/index";
import Courses from "./Components/CoursePage/index";
import Footer from "./Components/FOOTER/Footer";
import ViewCourse from "./Components/GetStarted/index";
import EnglishTEst from "./Components/Subjects/English/englishverb";
import Mathematics from "./Components/Subjects/math/math"

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
          <Route path="/test/english" element={<EnglishTEst/>}/>
          <Route path="/test/maths" element={<Mathematics/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
