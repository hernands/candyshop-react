import './NavBar.css'

const NavBar = () => {

    return(
        //JSX
        <header>
            <div className='logo-container'>
                <img src='/assets/logo.png' alt='logo'></img>
                <h1>React CandyShop</h1>
            </div>
            <div className='menu-container'>
                <ul className='menu'>
                    <li className='menu-item'>
                        <a href='#' className='menu-link'>
                            Nosotros
                        </a>
                    </li>
                    <li className='menu-item'>
                        <a href='#' className='menu-link'>
                            Productos
                        </a>
                    </li>
                    <li className='menu-item'>
                        <a href='#' className='menu-link'>
                            Cuenta
                        </a>
                    </li>
                    <li className='menu-item'>
                        <a href='#' className='menu-link'>
                            Carrito
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )

}

export default NavBar;