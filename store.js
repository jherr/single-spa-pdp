window.pdp = {};

window.pdp.cart = {
  count: 0,
  addToCart() {
    window.pdp.cart.count += 1;
    window.dispatchEvent(new Event('cartChange'));
  },
};

window.pdp.product = {
  name: 'Dog 1',
  image: 'https://images.dog.ceo/breeds/puggle/IMG_071023.jpg',
  setProduct(name, image) {
    window.pdp.product.name = name;
    window.pdp.product.image = image;
    window.dispatchEvent(new Event('productChange'));
  }
};
