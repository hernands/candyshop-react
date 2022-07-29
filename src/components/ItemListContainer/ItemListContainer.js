import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import products from '../../utils/products.mock'
import ItemList from '../ItemList/ItemList'

console.log(products)

const ItemListContainer = ({greeting}) => {

    const [listItems, setListItems] = useState([])

    const getItems = new Promise ( (resolve) => {
        setTimeout(()=>{resolve(products)},2000)}
    )

    useEffect( ()=>{
        getItems.then((res)=>{setListItems(res)})
    } ,[])

    

    return (
        //JSX
        <><h2> {greeting} </h2>
        <div className='item-list-container'>
            
            <ItemList items={listItems} />
            
        </div>
        </>
    )

}

export default ItemListContainer