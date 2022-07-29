import './Item.css'

const Item = ({data}) => {
    const {id, title, price, img, stock} = data
    return (
         <div className='item-card'>
            <div className='card-img-container'><img src={`${img}`} /></div>
            <h4>{title}</h4>
            <p>${price}</p>
         </div>
    )

}


export default Item