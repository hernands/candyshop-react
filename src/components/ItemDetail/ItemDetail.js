import './ItemDetail.css'

const ItemDetail = ({details}) => {

    return (

        <div className='description-container'>
            <div className='detail-img-container'><img src={details.imgurl}></img></div>
            <p> {details.info}</p>
        </div>

    )

} 

export default ItemDetail