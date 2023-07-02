import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from './portfolio/Layout';
import Main from './portfolio/Main';
import $ from 'jquery'



export default function App(){

  useEffect(()=>{
    $(window).on('wheel',function(e){
      let a = e.originalEvent.wheelDelta
      console.log(a)
    })
  },[])
  return(

    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />}>

          </Route>
        </Route>
      </Routes>
    </HashRouter>
  )
}








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

