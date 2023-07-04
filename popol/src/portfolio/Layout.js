import { Link, Outlet } from 'react-router-dom';
import "./css/layout.css"
import $ from 'jquery'
function aa(){
    console.log($('.menu'))
}
function Layout(){
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
                        <div>소개글</div>
                        <div>＋</div>
                    </li>
                    <li>
                        <div>나의 기술</div>
                        <div>＋</div>
                    </li>
                    <li>
                        <div>연락처</div>
                        <div>＋</div>
                    </li>
                </ul>
            </aside>
        </>
    )
}

export default Layout;