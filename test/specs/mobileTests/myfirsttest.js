const percyScreenshot = require('@percy/appium-app');
describe('e2e Test', ()=> {
    it('Open Categories', async () => {

        const element = $('//android.widget.Button[@content-desc="tabButton_categories"]');
        element.click();
        await percyScreenshot('Categories Page');
    })
})