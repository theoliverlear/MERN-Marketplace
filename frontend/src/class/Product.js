export default class Product {
    //------------------------------Constructor-------------------------------
    constructor(id, name, categories, price, description, rating, image) {
        this._id = id;
        this._name = name;
        this._categories = categories;
        this._price = price;
        this._description = description;
        this._rating = rating;
        this._image = image;
    }
    //--------------------------------Getters---------------------------------
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get categories() {
        return this._categories;
    }
    get price() {
        return this._price;
    }
    get description() {
        return this._description;
    }
    get rating() {
        return this._rating;
    }
    get image() {
        return this._image;
    }
    //--------------------------------Setters---------------------------------
    set id(id) {
        this._id = id;
    }
    set name(name) {
        this._name = name;
    }
    set categories(categories) {
        this._categories = categories;
    }
    set price(price) {
        this._price = price;
    }
    set description(description) {
        this._description = description;
    }
    set rating(rating) {
        this._rating = rating;
    }
    set image(image) {
        this._image = image;
    }

}