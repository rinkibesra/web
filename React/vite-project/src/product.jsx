import "./product.css";
function Product({ title, price,features }) {
   
    return (
        <div className="product">
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <p>Features:{features} </p>
           
    </div>
    )
}
export default Product