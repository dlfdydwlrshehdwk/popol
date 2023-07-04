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
                        <li>
                            <Link to="/main">로고</Link>
                        </li>
                        <li className='menu'>
                            <div>
                                메뉴탭
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
        </>
    )
}

export default Layout;