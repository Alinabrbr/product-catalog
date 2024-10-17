import React, {useEffect} from 'react';
import './App.css';
import {Cards} from "../components/Cards/cards";
import {Footer} from "../components/Footer/footer";
import {Header} from "../components/Header/header";
import {useAppDispatch} from "../utils/types/types";
import {getProducts} from "../services/reducers/productsSlice";


function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Header/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
