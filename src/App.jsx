import { Route, BrowserRouter as Router,Routes,Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AboutPage from "./pages/AboutPage";
import "./styles/Pages.css";
import CoursesPage from "./pages/CoursesPage";
import ChatbotComponent from "./Components/Chatbot/ChatbotComponents";
import ContactPage from "./pages/ContactPage";
import  AdmissionPage from "./pages/AdmissionPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useState } from "react";
import DeveloperInfoPopup from "./Components/DeveloperInfo/DeveloperInfoPopup";
function App() {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Vaishnavi Vasant Patil"
          studentPhotoUrl="public/Images/316c6cfc-11e6-41ae-8b0e-dc526d2fc3a6.jfif" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <Router>
      <div className="main-layout">
        <Header/>
        <div className="content">
      <Routes>
        <Route path ="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/admission" element={<AdmissionPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <ChatbotComponent/>
      </div>
      <Footer/>
      </div>
    </Router>
  </>
  );
}
export default App;