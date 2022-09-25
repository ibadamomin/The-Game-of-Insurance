import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Career from './Career';
import Car from './Car';
import Action from './Action';
import CEO from './components/CEO'; 
import Student from './components/Student'; 
import SDE from './components/SDE'; 
import Teacher from './components/Teacher'; 
import Ford from './components/Ford'; 
import Toyota from './components/Toyota'; 
import Lexus from './components/Lexue'; 
import Audi from './components/Audi'; 
import Home from './Home';
import Gender from './Gender';
import FormSub from './FormSub';
import Insurance from './Insurance';

function App() {
  return (
    <Router>
        <Routes>   
          <Route path='/' element={<Home />}></Route>
          <Route path='/Ceo' element={<CEO />}></Route>
          <Route path='/Career' element={<Career />}></Route>
          <Route path='/Car' element={<Car />}></Route>
          <Route path='/Action' element={<Action />}></Route>
          <Route path='/Student' element={<Student />}></Route>
          <Route path='/SDE' element={<SDE />}></Route>
          <Route path='/Teacher' element={<Teacher />}></Route>
          <Route path='/Ford' element={<Ford />}></Route>
          <Route path='/Toyota' element={<Toyota />}></Route>
          <Route path='/Lexus' element={<Lexus />}></Route>
          <Route path='/Audi' element={<Audi />}></Route>
          <Route path='/Gender' element={<Gender />}></Route>
          <Route path='/formsub' element={<FormSub />}></Route>
          <Route path='/insurance' element={<Insurance />}></Route>
        </Routes>
      
  </Router>



    
  );
}

export default App;
