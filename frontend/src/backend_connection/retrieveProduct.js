import Product from "../class/Product.js";
let randomProduct = null;
function getRandomProduct() {
    const apiURL = "https://localhost:5000/randomProduct";
    fetch(apiURL).then((response) => {
        const id = response.id;
        const name = response.name;
        const price = response.price;
        const description = response.description;
        const image = response.image;
        randomProduct = new Product(id, name, price, description, image);
    });
    return randomProduct;
}
function getTestProduct() {
    const id = 1;
    const name = "Super Mario Wonder";
    const categories = ["Video Game", "Japanese", "Gaming"];
    const price = 59.99;
    const description = "The newest adventure of Mario, Luigi and " +
                               "the lovely Toads in a battle against the" +
                               " mighty Bowser! Completely rebuilt from the" +
                               " ground up -- Super Mario Bros. Wonder" +
                               " offers over a hundred new features. So " +
                               "whether you fight alone or with friends" +
                               " -- Super Mario Bros. Wonder is a wonderful" +
                               " game!";
    const rating = 5.0;
    const image = "../../backend/images/1.png";
    const testProduct = new Product(id, name, categories, price,
                                            description, rating, image);
    return testProduct;
}
export { getRandomProduct, getTestProduct };