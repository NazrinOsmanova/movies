import './App.css';
import Basket from './Components/Basket';
import Index from './Components/Index';
import { useEffect } from 'react';
import { addBasket } from './store/basket'
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import ReadMore from './Components/ReadMore';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=godfather&apikey=1ef7ec0e`)
      .then(res => res.json())
      .then(data => {
        dispatch(addBasket(data))
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/movies" element={<Index />} />
        <Route path="basket" element={<Basket />} />
        <Route path="/readmore/:id" element={<ReadMore />} />
      </Routes>
    </div>
  );
}

export default App;
