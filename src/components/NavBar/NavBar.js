import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {

    return(
        //JSX
        <header>
            
            <div className='menu-container header-section'>
                <ul className='menu'>
                    <li className='menu-item'>
                        <button href='#' className='menu-button'>
                            Nosotros
                        </button>
                    </li>
                    <li className='menu-item'>
                        <button href='#' className='menu-button'>
                            Productos
                        </button>
                    </li>
                    <li className='menu-item'>
                        <button href='#' className='menu-button'>
                            Cuenta
                        </button>
                    </li>
                    
                </ul>
            </div>
            <div className='header-section logo-section'>
                <div className='logo-container'> 
                <img src='/assets/logo.png' alt='logo'></img>
                </div>
                <h1>The React <br></br>Candy Shop.</h1>
            </div>
            <div className='cart-container header-section'>
                <CartWidget />
            </div>

        </header>
    )

}

export default NavBar;