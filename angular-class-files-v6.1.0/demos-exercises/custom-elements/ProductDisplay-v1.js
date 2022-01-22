// Create a class for the element
class ProductDisplay extends HTMLElement {
    constructor() {
        super();
        // Create a shadow root
        let shadow = this.attachShadow({mode: 'open'});
        // Create a standard img element and set it's attributes.
        let img = document.createElement('img');
        img.alt = this.getAttribute('data-name');
        img.src = this.getAttribute('data-img');
        img.width = '150';
        img.height = '150';
        // Add the image to the shadow root.
        shadow.appendChild(img);
        // Add an event listener to the image.
        img.addEventListener('click', () => {
            window.location = this.getAttribute('data-url');
    });
        // Create a link to the product.
        let link = document.createElement('a');
        link.innerText = this.getAttribute('data-name');
        link.href = this.getAttribute('data-url');
        // Add the link to the shadow root.
        shadow.appendChild(link);
    }
}
// Define the new element
customElements.define('product-display', ProductDisplay);
