import './ItemCount.css'
 import { useState } from 'react'

const ItemCount = () => {

    const item = {
        name: 'JellyScript',
        stock: 9
    }

    const [number, setNumber] = useState(1)

    const incrNumber = () =>{
        if ( item.stock > number) {
            setNumber( number + 1 )
        }
    }

    const decrNumber = () =>{
        if ( number > 0 ) {
            setNumber( number - 1 )
        }
    }

    return (
        <>
        <h5>{item.name}</h5>
        <div className='counter-container'>
            <button onClick={decrNumber}>-</button>
            <span>{number}</span>
            <button onClick={incrNumber}>+</button>            
        </div>
        <button className='add-to-cart'> Añadir al carrito </button>
        </>     
    )

}

export default ItemCount