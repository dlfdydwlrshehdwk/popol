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
        </>
    )
}

export default Layout;