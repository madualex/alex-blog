import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Blog from './pages/Blog';
import Blogpost from './pages/Blogpost';
import Error from './pages/Error';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/blog/:slug' element={<Blogpost />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
