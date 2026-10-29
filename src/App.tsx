import { Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './assets/Components/Footer/Footer';
import { FOOTER_DATA } from './assets/Components/Footer/footerData';
import type { NavItem } from './assets/interfaces';
import Home from './assets/pages/Home/Home';
import Header from './assets/Components/Header/Header';
import About from './assets/pages/About/About';
import Academics from './assets/pages/Academics/Academics';
import Admissions from './assets/pages/Admissions/Admissions';
import Student from './assets/pages/Student/Student';
 const navItems :NavItem[]=[
        {
        link:"Home",
        href:"/"
        },
        {
        link:"About Us",
        href:"/about"
        },
        {
        link:"Academics",
        href:"/academics"
        },
        {
        link:"Admissions",
        href:"/admission"
        },
        {
        link:"Student Life",
        href:"/student-life"
        },
        {
        link:"Contact",
        href:"/contact",
        //isCta: true
        }
]
function App() {
  return (
    <>
    <Header navItems={navItems}/>
 <main>
  <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/academics" element={<Academics/>} />
        <Route path="/admission" element={<Admissions/>} />
        <Route path="/student-life" element={<Student/>} />
  </Routes>
  
    </main>
    <Footer {...FOOTER_DATA} />
    </>
  );
}

export default App
