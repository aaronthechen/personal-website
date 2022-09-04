import { Route, Routes } from 'react-router-dom';
import './index.css'
import Index from './pages/Index';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
      </Routes>
    </div>
  );
}

export default App;
