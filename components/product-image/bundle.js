'use strict';

const webComponentApp = window.singleSpaHtml.default({
  template: '<div>Wild white horses</div>',
});

singleSpa.registerApplication('product-image', webComponentApp, () => true);
