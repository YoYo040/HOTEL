
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from './component/footer/Footer';



import Header from './component/header/Header';
import Help from './views/Help';

import Home from './views/Home';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/help' element={<Help/>}/>
      
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
