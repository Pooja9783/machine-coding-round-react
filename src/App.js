import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SearchFunctionality from '../src/components/SearchFunctionality'
import Home from '../src/Pages/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search-functionality' element={<SearchFunctionality/>} />
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
