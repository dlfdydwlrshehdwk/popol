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
      let i = 0;
      // console.log(a)

      if(a < 0){
        console.log('밑으로')
        i++
        // 만약 ul을 100으로 나눈숫자보다 커진다면 그숫자+1 보다 작게
        console.log($('.main_flexwrap').innerWidth())
        let c = $('.main_flexwrap').innerWidth() / 100
        if(i > c) i = c;
      }
      else{
        console.log('위로')
        i--
        // 만약 i가 0보다 작아진다면 i는 0
        if(i < 0) i = 0;
      }

      // 트랜스폼을 i * 100px로 셋팅 
      $('.main_flexwrap').css({
        transition : '.1s',
        transform : `translate(${(i * 100) + 'px'},-50%)`
        
      })
      // 부드럽게는 어떻게? .1초마다 ? <- ? 
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

