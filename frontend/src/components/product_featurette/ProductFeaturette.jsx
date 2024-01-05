import "./ProductFeaturette.css";
import BuyNowButton from "../buy_now_button/BuyNowButton";
import { getRandomProduct } from "../../backend_connection/retrieveProduct";
import { getTestProduct } from "../../backend_connection/retrieveProduct";

function ProductFeaturette() {
    const product = getTestProduct();
    return (
        <div className="ProductFeaturette">
            <h2>Product Featurette</h2>
            <div id="product-div">
                <div id="product-image-div">
                    <img src="./images/1.png" alt={product.name}/>
                </div>
                <div id="product-data-div">
                    <h3>{product.name}</h3>
                    <h4>${product.price}</h4>
                    {/*<p>{product.description}</p>*/}
                    <p>{product.categories[0]}</p>
                    <p>Rating: {product.rating}</p>
                    <BuyNowButton />
                </div>
            </div>
        </div>
    );
}
export default ProductFeaturette;