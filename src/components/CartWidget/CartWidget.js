import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons' 


const CartWidget = () => {
    
    return (
        //JSX
        <div className='cart-container'>
            <FontAwesomeIcon icon= {faCartShopping} />
        </div>

    )

}

export default CartWidget;