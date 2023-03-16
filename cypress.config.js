const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    
      on('before:browser:launch', (browser = {}, args) => {
        console.log(config, browser, args);
        if (browser.name === 'chrome') {
          args.push("--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process");
        }
        return args;
      });
    },
    
  },
 chromeWebSecurity: false,
 watchForFileChanges:false,
 trashAssetsBeforeRuns:true
});
