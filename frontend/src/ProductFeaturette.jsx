import { getRandomProduct } from "./backend_connection/retrieveProduct";
import { getTestProduct } from "./backend_connection/retrieveProduct";

function ProductFeaturette() {
    const product = getTestProduct();
    return (
        <div>
            <h1>Product Featurette</h1>
            <div>
                <h3>{product.price}</h3>
                <p>{product.description}</p>
                <p>Category: {product.categories[0]}</p>
                <p>Rating: {product.rating}</p>
                <img src="../../backend/images/1.png" alt={product.name} />
            </div>
        </div>
    )
}
export default ProductFeaturette;