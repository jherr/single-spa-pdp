System.import('single-spa').then(function (singleSpa) {
  const template = `
  <style>
  .product-description {
    background: lightgrey;
    padding: 1em;
  }
  </style>
  <div class="product-description">
  </div>
  `;

  const webComponentApp = window.singleSpaHtml.default({
    template,
  });

  webComponentApp.originalMount = webComponentApp.mount;
  webComponentApp.mount = function(opts, props) {
    return webComponentApp.originalMount(opts, props)
      .then(() => {
        const el = document.querySelector('.product-description');
        el.innerText = window.pdp.product.name;
        window.addEventListener('productChange', () => {
          el.innerText = window.pdp.product.name;
        });
      });
  }.bind(webComponentApp);

  singleSpa.registerApplication('product-description', webComponentApp, () => true);
});
