import "./Card.css";

const Card = ({title, type, price, img, isAvailable, onSale}) => {


    return (
        <div className={`card ${isAvailable === false && "notAvailable"}`}>
            <div className="image-container">
                <img src={img}/>
            </div>

            <h1>{title}</h1>

            <div className="container-info">
                <p>{type}</p>
                <p>{price}</p>
            </div>
            {onSale === true && <p>ON SALE</p>}
        </div>
    )
}

export default Card;