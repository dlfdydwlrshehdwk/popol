import React, { useEffect, useState } from 'react';
import './css/main.css';
import $ from 'jquery'
import pofoldata from './data/pofoldata';
function Main(){

    let [bg , setBg] = useState(0)
    useEffect(()=>{
    },[])

    return(
        <>
            <section className='main_wrap'>
                <ul className='main_flexwrap'>
                    {
                        // console.log(pofoldata)
                        pofoldata.map((x,i)=>
                        <li key={i} className='main_flex_item' onMouseOver={()=>{console.log($('.main_wrap'),x.idx)}}>
                            <h4>{x.language}</h4>
                            <p>{x.title}</p>
                            <button onClick={()=>{window.open(x.address)}}>View Project</button>
                        </li>
                        )
                    }
                </ul>
                <div className='bg'>
                    <img src={pofoldata[1].isrc}/>
                </div>
            </section>
        </>
    )
}

export default Main;