import './App.css';
import Navigation from './components/navigation/Navigation';
import Main from './components/films/Main';
import Footer from './components/footer/Footer';
import Detail from './components/detail/Detail';
import Contact from './components/contact/Contact';
import { Route, Routes } from 'react-router-dom';
import About from './components/about-us/About';
import News from './components/news/News';

function App() {
  
  return (
    <div className='App'>
      <div className='content-wrap'>
      <Navigation />
            <Routes>
        <Route path='/' element={<Main />}>
        </Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
