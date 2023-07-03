import React, { useEffect } from 'react';
import './css/main.css';
import $ from 'jquery'
import pofoldata from './data/pofoldata';
function Main(){

    useEffect(()=>{
    },[])

    return(
        <>
            <section className='main_wrap'>
                <ul className='main_flexwrap'>
                    {
                        pofoldata.map((x,i)=>{
                            <li className='main_flex_item' key={i}>
                                <h3>{x.title}</h3>
                                <p>{x.language}</p>
                                <button onClick={window.open(x.address)}>View Project</button>
                            </li>
                        })
                    }
                </ul>
            </section>
        </>
    )
}

export default Main;