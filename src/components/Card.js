import "./Card.css";

const Card = ({title, type, price, img}) => {


    return (
        <div className="card">
            <div className="image-container">
                <img src={img}/>
            </div>

            <h1>{title}</h1>

            <div className="container-info">
                <p>{type}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default Card;