const { openBrowser, goto, scrollTo, click, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto('https://frontrange.edu');
        await scrollTo('Ready to Apply?');
        await click('Apply Now');
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
