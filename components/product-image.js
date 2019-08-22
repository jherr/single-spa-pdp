const template = `
<style>
.product-image {
  background: lightgrey;
  padding: 1em;
}
</style>
<div class="product-image">
  <img style="height: 300px;"></img>
</div>
`;
System.import('single-spa').then(function (singleSpa) {
  const webComponentApp = window.singleSpaHtml.default({
    template,
  });

  webComponentApp.originalMount = webComponentApp.mount;
  webComponentApp.mount = function(opts, props) {
    return webComponentApp.originalMount(opts, props)
      .then(() => {
        const el = document.querySelector('.product-image img');
        el.src = window.pdp.product.image;
        window.addEventListener('productChange', () => {
          el.src = window.pdp.product.image;
        });
      });
  }.bind(webComponentApp);

  singleSpa.registerApplication('product-image', webComponentApp, () => true);
});
