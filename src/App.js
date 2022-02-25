import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
// import './App.css';

function App() {
  return (
    <div className="panel-bg">
      <Navbar />
      <div className="App-header">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
