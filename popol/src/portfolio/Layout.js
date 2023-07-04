import { Link, Outlet } from 'react-router-dom';
import "./css/layout.css"
import $ from 'jquery'
import { useEffect, useState } from 'react';
import pofoldata from './data/pofoldata';
function aa(){
    console.log($('.menu'))
}
function Layout(){

    const [soga, setSoga] = useState([1,0])


    useEffect(()=>{
        console.log(soga)
    })


    return(
        <>
            <header>
                <nav>
                    <ul className='layout_header_ul'>
                        <li className='logo'>
                            <Link to="/main">
                                <img src='./../images/logo.png'/>
                            </Link>
                        </li>
                        <li className='menu'>
                            <div>
                                MENU
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
            <main id='main'>
                <Outlet />
            </main>
            <footer id='footer'>
                푸터야!
            </footer>
            <aside className='side'>
                <ul>
                    <li>
                        <div className='flexbx'>
                            <div>소개글</div>
                            {
                                soga[0] == 1 &&
                                <div onClick={()=>{
                                    let copy = [...soga]
                                    copy[0] = 0
                                    setSoga(copy)
                                }}>－</div>
                            }
                            {
                                soga[0] == 0 &&
                                <div onClick={()=>{
                                    let copy = [...soga]
                                    copy[0] = 1
                                    setSoga(copy)
                                }}>＋</div>
                            }
                        </div>

                        {
                            soga[0] == 1 &&
                            <div className='txtbx'>
                                <p>
                                {pofoldata.length}개의 프로젝트로 이루어져있는
                                </p>
                                <p>
                                김동호의 포트폴리오 사이트입니다.<br/>
                                (프론트엔드 취업준비중)
                                </p>
                            </div>
                        }
                    </li>


                    <li>
                        <div className='flexbx'>
                            <div>나의 기술</div>
                            {
                                soga[1] == 0 &&
                                <div onClick={()=>{
                                    let copy = [...soga];
                                    copy[1] = 1;
                                    setSoga(copy)
                                }}>＋</div>
                            }
                            {
                                soga[1] == 1 &&
                                <div onClick={()=>{
                                    let copy = [...soga];
                                    copy[1] = 0;
                                    setSoga(copy)
                                }}>－</div>
                            }
                        </div>
                        {
                            soga[1] == 1 &&
                            <div className='txtbx'>
                                <p>저는 그린컴퓨터 수료 어쩌구</p>
                                <p>이정도 할줄암 어쩌구</p>
                                <p>잡코리아주소</p>
                            </div>
                        }
                    </li>
                    <li>
                        <div>
                            연락처 : fkrmsk147@naver.com
                        </div>
                    </li>
                </ul>
            </aside>
        </>
    )
}

export default Layout;