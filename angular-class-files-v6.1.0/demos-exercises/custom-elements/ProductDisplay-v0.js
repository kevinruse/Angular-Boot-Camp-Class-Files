//activate button
document.querySelector('#invokeCustomAPI').addEventListener('click', showProduct);
//define a new prototype
const productDisplayProto = Object.create(HTMLElement.prototype);
//attach a method to the new prototype
productDisplayProto.showPrice = function() {
    document.getElementById('price').setAttribute('class','show');
    console.log('Price');
};
//register the custom element
document.registerElement('product-display', {prototype: productDisplayProto});

//callback function for button
function showProduct() {
    const newProduct = document.querySelector('product-display');
    newProduct.showPrice();
}