import './App.css';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Main from './component/main/Main';
import AllProjects from './component/allprojects/AllProjects';
import Forms from  './component/forms/Forms';
import { Routes, Route } from "react-router-dom";
import SimpleForm from './component/form_details/simple_form/SimpleForm';
import ValidationForm from './component/form_details/simple_validation/SimpleValidationForm';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>

        <Route path='/' element={<Main/>} />
        <Route path='/all-projects' element={<AllProjects/>} />
        <Route path='/forms' element={<Forms/>} />
        <Route path='/forms/simple' element={<SimpleForm/>} />
        <Route path='/forms/validation' element={<ValidationForm/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
