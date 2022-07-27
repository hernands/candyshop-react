import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'


const ItemListContainer = ({greeting}) => {

    return (
        //JSX
        <div className='welcome-message'>
            <p> {greeting} </p>
            <ItemCount/>
        </div>
        
    )

}

export default ItemListContainer