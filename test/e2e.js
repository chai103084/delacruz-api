var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);
client
    .init()
    .url('https://delacruz-api-final.herokuapp.com/')
    .setValue('#pac-input', 'WebdriverIO')
    .click('#pac-input')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
        // outputs:
        // "Title is: WebdriverIO (Software) at DuckDuckGo"
    })
    .end();

/* test2.js */
var assert = require('assert');

describe('webdriver.io.page',function(){
    it('should have the right title', function(){
        browser.url('/');
        var title = browser.getTitle();
        console.log("TITLE IS ", title);
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js')

    });
});
