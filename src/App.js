import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SearchFunctionality from '../src/components/SearchFunctionality'
import Home from '../src/Pages/Home'
import Accordion from './components/Accordion';
import Pagination from './components/Pagination';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search-functionality' element={<SearchFunctionality/>} />
        <Route path='/accordion' element={<Accordion/>} />
        <Route path='/pagination' element={<Pagination/>} />
        <Route path='/todo' element={<Todo/>} />

      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
