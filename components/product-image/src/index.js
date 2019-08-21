const webComponentApp = window.singleSpaHtml.default({
  template: '<div>Wild white horses</div>',
})

singleSpa.registerApplication('name', webComponentApp, () => true)
