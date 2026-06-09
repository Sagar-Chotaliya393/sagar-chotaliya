import './App.css';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Main from './component/main/Main';
import AllProjects from './component/allprojects/AllProjects';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>

        <Route path='/' element={<Main/>} />
        <Route path='/all-projects' element={<AllProjects/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
