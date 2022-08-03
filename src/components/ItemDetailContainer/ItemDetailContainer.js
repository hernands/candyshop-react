import { useState, useEffect } from 'react'
import './ItemDetailContainer.css'
import descriptions from '../../utils/descriptions.mock'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

    const [itemDescription, setItemDescription] = useState([])

    const getDetails = new Promise ( (resolve) => {
        setTimeout(()=>{resolve(descriptions)},2000)}
    )

    useEffect( ()=>{
        getDetails.then((res)=>{setItemDescription(res)})
    } ,[])

    

    return (
        //JSX
        <><h2> Detalle del producto </h2>
        <div className='item-list-container'>
            
            <ItemDetail details={itemDescription} />
            
        </div>
        </>
    )

}

export default ItemDetailContainer