import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import products from '../../utils/products.mock'
import { useState } from 'react'


const ItemListContainer = ({greeting}) => {

    const [listItems, setListItems] = useState([])

    const getItems = new Promise ( (resolve, reject) => {
        setTimeout(()=>{resolve(products)},2000)}
    )

    getItems
    .then((res)=>{setListItems(res)})
    .catch((error)=>{console.log("No pudieron obtenerse los items");})

    return (
        //JSX
        <div className='item-list-container'>
            <p> {greeting} </p>
            <ItemList items={listItems} />
        </div>
        
    )

}

export default ItemListContainer